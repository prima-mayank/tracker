import { Router } from 'express';
import authRoutes from './auth.routes.js';
import searchRoutes from './search.routes.js';
import productRoutes from './product.routes.js';
import trackingRoutes from './tracking.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/search', searchRoutes);
router.use('/products', productRoutes);
router.use('/tracking', trackingRoutes);

export default router;
