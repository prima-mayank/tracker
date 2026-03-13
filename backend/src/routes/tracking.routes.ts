import { Router } from 'express';
import {
  trackProduct,
  untrackProduct,
  getTrackedProducts,
  updateTracking,
} from '../controllers/tracking.controller.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = Router();

router.use(requireAuth);

router.get('/', asyncHandler(getTrackedProducts));
router.post('/', asyncHandler(trackProduct));
router.delete('/:id', asyncHandler(untrackProduct));
router.patch('/:id', asyncHandler(updateTracking));

export default router;
