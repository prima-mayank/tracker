import { Router } from 'express';
import { getProduct, getProductPrices } from '../controllers/product.controller.js';
import { asyncHandler } from '../lib/async-handler.js';

const router = Router();

router.get('/:id', asyncHandler(getProduct));
router.get('/:id/prices', asyncHandler(getProductPrices));

export default router;
