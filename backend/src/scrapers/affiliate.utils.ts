import type { ScraperResult } from '@tracker/shared';
import { env } from '../config/index.js';

const appendQueryParam = (url: string, key: string, value: string): string => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${key}=${encodeURIComponent(value)}`;
};

export const applyAffiliateTag = (result: ScraperResult): ScraperResult => {
  if (result.source === 'amazon' && env.AMAZON_AFFILIATE_TAG) {
    return { ...result, affiliateUrl: appendQueryParam(result.originalUrl, 'tag', env.AMAZON_AFFILIATE_TAG) };
  }

  if (result.source === 'flipkart' && env.FLIPKART_AFFILIATE_TAG) {
    return { ...result, affiliateUrl: appendQueryParam(result.originalUrl, 'affid', env.FLIPKART_AFFILIATE_TAG) };
  }

  return result;
};
