import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';
import { chromium as chromiumExtra } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import type { SiteConfig, ScraperResult } from '@tracker/shared';
import { parseIndianPrice } from '@tracker/shared';
import { ScraperError, SCRAPER_ERROR_CODE } from '../errors/scraper.errors.js';
import { logScraperError, logScraperSuccess } from '../logger/scraper.logger.js';

chromiumExtra.use(StealthPlugin());

const DEFAULT_NAVIGATION_TIMEOUT = 15_000;
const DEFAULT_EXTRACTION_TIMEOUT = 8_000;

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
];

const VIEWPORTS = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 1536, height: 864 },
];

const AD_DOMAINS = ['doubleclick.net', 'googlesyndication.com', 'googletagmanager.com'];

const BLOCKED_RESOURCE_TYPES = new Set(['image', 'font', 'media']);

const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const isCaptchaPage = (url: string, title: string): boolean =>
  /captcha|\/sorry|\/challenge/.test(url) || /captcha|robot|human verification/i.test(title);

const isSiteDown = (status: number): boolean => status >= 500;

const resolveSelector = async (page: Page, selectors: string | string[]): Promise<string | null> => {
  const list = Array.isArray(selectors) ? selectors : [selectors];
  for (const sel of list) {
    const count = await page.locator(sel).count();
    if (count > 0) return sel;
  }
  return null;
};

const extractText = async (page: Page, root: string, index: number, selectors: string | string[]): Promise<string> => {
  const list = Array.isArray(selectors) ? selectors : [selectors];
  for (const sel of list) {
    try {
      const text = await page.locator(root).nth(index).locator(sel).first().innerText({ timeout: 1000 });
      if (text.trim()) return text.trim();
    } catch {
      // try next fallback
    }
  }
  return '';
};

const extractAttr = async (page: Page, root: string, index: number, selectors: string | string[], attr: string): Promise<string> => {
  const list = Array.isArray(selectors) ? selectors : [selectors];
  for (const sel of list) {
    try {
      const val = await page.locator(root).nth(index).locator(sel).first().getAttribute(attr, { timeout: 1000 });
      if (val?.trim()) return val.trim();
    } catch {
      // try next fallback
    }
  }
  return '';
};

class PlaywrightProvider {
  private _browser: Browser | null = null;

  private async getBrowser(): Promise<Browser> {
    if (this._browser?.isConnected()) return this._browser;
    this._browser = await chromiumExtra.launch({ headless: true });
    return this._browser;
  }

  async shutdown(): Promise<void> {
    if (this._browser?.isConnected()) {
      await this._browser.close();
      this._browser = null;
    }
  }

  private async createContext(config: SiteConfig): Promise<BrowserContext> {
    const browser = await this.getBrowser();
    const ua = randomFrom(USER_AGENTS);
    const viewport = randomFrom(VIEWPORTS);

    const context = await browser.newContext({
      userAgent: ua,
      viewport,
      locale: 'en-IN',
      extraHTTPHeaders: {
        'Accept-Language': 'en-IN,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    await context.route('**/*', (route) => {
      const req = route.request();
      const resourceType = req.resourceType();
      const url = req.url();

      if (BLOCKED_RESOURCE_TYPES.has(resourceType)) return route.abort();
      if (config.blockCSS && resourceType === 'stylesheet') return route.abort();
      if (AD_DOMAINS.some((d) => url.includes(d))) return route.abort();

      return route.continue();
    });

    return context;
  }

  async scrape(config: SiteConfig, query: string, pincode?: string): Promise<ScraperResult[]> {
    const startedAt = Date.now();
    const searchUrl = config.searchUrlTemplate.replace('{query}', encodeURIComponent(query));
    let context: BrowserContext | null = null;

    try {
      context = await this.createContext(config);
      const page = await context.newPage();

      if (config.requiresPincode && config.setPincode && pincode) {
        try {
          await config.setPincode(page as unknown as import('@tracker/shared').BrowserPage, pincode);
        } catch (err) {
          throw new ScraperError(
            SCRAPER_ERROR_CODE.PINCODE_FAILED,
            config.name,
            Date.now() - startedAt,
            err instanceof Error ? err.message : 'pincode setup failed',
          );
        }
      }

      const response = await page.goto(searchUrl, {
        waitUntil: 'domcontentloaded',
        timeout: config.navigationTimeout ?? DEFAULT_NAVIGATION_TIMEOUT,
      }).catch((err: Error) => {
        if (err.message.includes('net::ERR') || err.message.includes('NS_ERROR')) {
          throw new ScraperError(SCRAPER_ERROR_CODE.SITE_DOWN, config.name, Date.now() - startedAt, err.message);
        }
        throw new ScraperError(SCRAPER_ERROR_CODE.NAVIGATION_TIMEOUT, config.name, Date.now() - startedAt, err.message);
      });

      if (response && isSiteDown(response.status())) {
        throw new ScraperError(SCRAPER_ERROR_CODE.SITE_DOWN, config.name, Date.now() - startedAt, `HTTP ${response.status()}`);
      }

      // Allow JS to hydrate
      await page.waitForTimeout(800 + Math.floor(Math.random() * 700));

      const pageTitle = await page.title();
      const pageUrl = page.url();

      if (isCaptchaPage(pageUrl, pageTitle)) {
        throw new ScraperError(SCRAPER_ERROR_CODE.CAPTCHA_DETECTED, config.name, Date.now() - startedAt);
      }

      const containerSelector = await resolveSelector(page, config.selectors.resultContainer);
      if (!containerSelector) {
        throw new ScraperError(SCRAPER_ERROR_CODE.SELECTOR_NOT_FOUND, config.name, Date.now() - startedAt, 'resultContainer not found');
      }

      await page.waitForSelector(containerSelector, {
        timeout: config.extractionTimeout ?? DEFAULT_EXTRACTION_TIMEOUT,
      }).catch(() => {
        throw new ScraperError(SCRAPER_ERROR_CODE.SELECTOR_NOT_FOUND, config.name, Date.now() - startedAt, 'resultContainer timeout');
      });

      const count = await page.locator(containerSelector).count();
      const results: ScraperResult[] = [];

      for (let i = 0; i < Math.min(count, 20); i++) {
        const title = await extractText(page, containerSelector, i, config.selectors.title);
        const priceRaw = await extractText(page, containerSelector, i, config.selectors.price);
        const link = await extractAttr(page, containerSelector, i, config.selectors.link, 'href');
        const image = config.selectors.image
          ? await extractAttr(page, containerSelector, i, config.selectors.image, 'src')
          : undefined;
        const ratingRaw = config.selectors.rating
          ? await extractText(page, containerSelector, i, config.selectors.rating)
          : undefined;
        const reviewCountRaw = config.selectors.reviewCount
          ? await extractText(page, containerSelector, i, config.selectors.reviewCount)
          : undefined;
        const offerText = config.selectors.offerText
          ? await extractText(page, containerSelector, i, config.selectors.offerText)
          : undefined;
        const sellerName = config.selectors.sellerName
          ? await extractText(page, containerSelector, i, config.selectors.sellerName)
          : undefined;

        if (!title || !link) continue;

        const price = parseIndianPrice(priceRaw);
        const isAvailable = price > 0;

        const originalUrl = link.startsWith('http') ? link : `https://www.${config.name}.${config.name === 'amazon' ? 'in' : 'com'}${link}`;

        const rating = ratingRaw ? parseFloat(ratingRaw.replace(/[^0-9.]/g, '').trim()) || undefined : undefined;
        const reviewCount = reviewCountRaw ? parseInt(reviewCountRaw.replace(/[^0-9]/g, ''), 10) || undefined : undefined;

        results.push({
          source: config.name,
          title,
          price,
          currency: 'INR',
          originalUrl,
          imageUrl: image || undefined,
          sellerName: sellerName || undefined,
          rating: rating && !isNaN(rating) ? rating : undefined,
          reviewCount: reviewCount && !isNaN(reviewCount) ? reviewCount : undefined,
          offerText: offerText || undefined,
          isAvailable,
        });
      }

      if (results.length === 0) {
        throw new ScraperError(SCRAPER_ERROR_CODE.EXTRACTION_FAILED, config.name, Date.now() - startedAt, 'zero results extracted');
      }

      logScraperSuccess(config.name, query, results.length, Date.now() - startedAt);
      return results;
    } catch (err) {
      if (err instanceof ScraperError) {
        logScraperError(config.name, query, err);
        return [];
      }
      const wrapped = new ScraperError(SCRAPER_ERROR_CODE.EXTRACTION_FAILED, config.name, Date.now() - startedAt, String(err));
      logScraperError(config.name, query, wrapped);
      return [];
    } finally {
      await context?.close();
    }
  }
}

export const playwrightProvider = new PlaywrightProvider();

export const scrapeWithPlaywright = (
  config: SiteConfig,
  query: string,
  pincode?: string,
): Promise<ScraperResult[]> => playwrightProvider.scrape(config, query, pincode);
