export const PRODUCT_CATEGORY = {
  ELECTRONICS: 'electronics',
  FASHION: 'fashion',
  GROCERY: 'grocery',
  GENERAL: 'general',
} as const;

export type ProductCategory = (typeof PRODUCT_CATEGORY)[keyof typeof PRODUCT_CATEGORY];

const ELECTRONICS_KEYWORDS = [
  'phone', 'mobile', 'laptop', 'tv', 'television', 'monitor', 'headphones',
  'earbuds', 'earphones', 'tablet', 'camera', 'charger', 'router', 'processor',
  'gpu', 'ssd', 'ram', 'keyboard', 'mouse', 'speaker', 'smartwatch', 'refrigerator',
  'washing machine', 'microwave', 'ac', 'air conditioner', 'cooler', 'printer',
  'projector', 'hard disk', 'pendrive', 'powerbank', 'cable', 'adapter',
];

const FASHION_KEYWORDS = [
  'shirt', 'dress', 'jeans', 'kurta', 'saree', 'lehenga', 'shoes', 'sneakers',
  'sandals', 'handbag', 'wallet', 'jacket', 'hoodie', 'tshirt', 't-shirt',
  'tops', 'skirt', 'kurti', 'ethnic', 'socks', 'underwear', 'lingerie',
  'blazer', 'trouser', 'shorts', 'dupatta', 'suit',
];

const GROCERY_KEYWORDS = [
  'milk', 'rice', 'dal', 'atta', 'flour', 'oil', 'sugar', 'salt', 'bread',
  'eggs', 'vegetables', 'fruits', 'biscuit', 'juice', 'shampoo', 'soap',
  'detergent', 'chips', 'snacks', 'coffee', 'tea', 'pulses', 'ghee', 'butter',
  'cheese', 'yogurt', 'noodles', 'pasta', 'sauce', 'spices', 'masala',
];

export const CATEGORY_ADAPTER_MAP: Record<ProductCategory, string[]> = {
  electronics: ['amazon', 'flipkart', 'snapdeal', 'tatacliq', 'noon'],
  fashion: ['amazon', 'flipkart', 'myntra', 'ajio', 'meesho'],
  grocery: ['instamart', 'blinkit', 'jiomart'],
  general: ['amazon', 'flipkart', 'meesho', 'myntra', 'ajio', 'snapdeal', 'tatacliq', 'jiomart', 'instamart', 'blinkit', 'noon'],
};

export const detectCategory = (query: string): ProductCategory => {
  const lower = query.toLowerCase();

  const hasMatch = (keywords: string[]): boolean =>
    keywords.some((kw) => lower.includes(kw));

  // Priority: grocery > electronics > fashion > general
  if (hasMatch(GROCERY_KEYWORDS)) return PRODUCT_CATEGORY.GROCERY;
  if (hasMatch(ELECTRONICS_KEYWORDS)) return PRODUCT_CATEGORY.ELECTRONICS;
  if (hasMatch(FASHION_KEYWORDS)) return PRODUCT_CATEGORY.FASHION;
  return PRODUCT_CATEGORY.GENERAL;
};
