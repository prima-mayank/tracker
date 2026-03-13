import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock env before importing affiliate utils
vi.mock('../../config/index.js', () => ({
  env: {
    AMAZON_AFFILIATE_TAG: 'testamzn-21',
    FLIPKART_AFFILIATE_TAG: 'testfk123',
    FRONTEND_URL: 'http://localhost:3000',
  },
}));

const { applyAffiliateTag } = await import('../../scrapers/affiliate.utils.js');

const makeResult = (source: string, url = 'https://example.com/product') => ({
  source,
  title: 'Test Product',
  price: 999,
  currency: 'INR',
  originalUrl: url,
  isAvailable: true,
});

describe('applyAffiliateTag', () => {
  it('appends amazon tag when AMAZON_AFFILIATE_TAG is set', () => {
    const result = applyAffiliateTag(makeResult('amazon'));
    expect(result.affiliateUrl).toContain('tag=testamzn-21');
  });

  it('appends flipkart affid when FLIPKART_AFFILIATE_TAG is set', () => {
    const result = applyAffiliateTag(makeResult('flipkart'));
    expect(result.affiliateUrl).toContain('affid=testfk123');
  });

  it('returns result unchanged for non-affiliate source', () => {
    const result = applyAffiliateTag(makeResult('noon'));
    expect(result.affiliateUrl).toBeUndefined();
  });

  it('uses & when URL already has query params', () => {
    const result = applyAffiliateTag(makeResult('amazon', 'https://amazon.in/dp/B09?ref=sr'));
    expect(result.affiliateUrl).toContain('&tag=testamzn-21');
  });

  it('uses ? when URL has no query params', () => {
    const result = applyAffiliateTag(makeResult('amazon', 'https://amazon.in/dp/B09'));
    expect(result.affiliateUrl).toContain('?tag=testamzn-21');
  });
});
