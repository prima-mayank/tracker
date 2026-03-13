/**
 * Parses Indian e-commerce price strings into a plain number (INR, no decimals).
 *
 * Handles: ₹1,23,456 | ₹1,499.00 | MRP ₹1,999 ₹1,499 | Rs. 299 | 1499 | ₹1,499/-
 * Returns 0 for empty / non-numeric / "Out of Stock" / "N/A" strings.
 */
export const parseIndianPrice = (raw: string): number => {
  if (!raw || typeof raw !== 'string') return 0;

  const matches = raw.match(/[\d,]+(\.\d{1,2})?/g);
  if (!matches || matches.length === 0) return 0;

  // Take the last match — when "MRP ₹1,999 ₹1,499" appears, the discounted price is last
  const last = matches[matches.length - 1];
  const cleaned = last.replace(/,/g, '');
  const parsed = parseFloat(cleaned);

  return isNaN(parsed) ? 0 : Math.round(parsed);
};
