import type { ScraperAdapter } from '@tracker/shared';
import { AmazonAdapter } from './adapters/amazon.adapter.js';
import { FlipkartAdapter } from './adapters/flipkart.adapter.js';
import { MeeshoAdapter } from './adapters/meesho.adapter.js';
import { MyntraAdapter } from './adapters/myntra.adapter.js';
import { AjioAdapter } from './adapters/ajio.adapter.js';
import { SnapdealAdapter } from './adapters/snapdeal.adapter.js';
import { TataCliqAdapter } from './adapters/tatacliq.adapter.js';
import { JiomartAdapter } from './adapters/jiomart.adapter.js';
import { InstamartAdapter } from './adapters/instamart.adapter.js';
import { BlinkitAdapter } from './adapters/blinkit.adapter.js';
import { NoonAdapter } from './adapters/noon.adapter.js';

const registry = new Map<string, ScraperAdapter>([
  ['amazon', new AmazonAdapter()],
  ['flipkart', new FlipkartAdapter()],
  ['meesho', new MeeshoAdapter()],
  ['myntra', new MyntraAdapter()],
  ['ajio', new AjioAdapter()],
  ['snapdeal', new SnapdealAdapter()],
  ['tatacliq', new TataCliqAdapter()],
  ['jiomart', new JiomartAdapter()],
  ['instamart', new InstamartAdapter()],
  ['blinkit', new BlinkitAdapter()],
  ['noon', new NoonAdapter()],
]);

export const getAdapter = (source: string): ScraperAdapter | undefined => registry.get(source);

export const getAllAdapters = (): ScraperAdapter[] => Array.from(registry.values());
