export const SUPPORTED_SOURCES = {
  AMAZON: 'amazon',
  FLIPKART: 'flipkart',
  MEESHO: 'meesho',
  MYNTRA: 'myntra',
  AJIO: 'ajio',
  SNAPDEAL: 'snapdeal',
  TATACLIQ: 'tatacliq',
  JIOMART: 'jiomart',
  INSTAMART: 'instamart',
  BLINKIT: 'blinkit',
  NOON: 'noon',
} as const;

export type SupportedSource = (typeof SUPPORTED_SOURCES)[keyof typeof SUPPORTED_SOURCES];

export const FASHION_ONLY_SOURCES: SupportedSource[] = [
  SUPPORTED_SOURCES.MYNTRA,
  SUPPORTED_SOURCES.AJIO,
  SUPPORTED_SOURCES.MEESHO,
];

export const GROCERY_SOURCES: SupportedSource[] = [
  SUPPORTED_SOURCES.INSTAMART,
  SUPPORTED_SOURCES.BLINKIT,
  SUPPORTED_SOURCES.JIOMART,
];
