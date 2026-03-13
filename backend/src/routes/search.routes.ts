import { Router } from 'express';
import { search } from '../controllers/search.controller.js';
import { asyncHandler } from '../lib/async-handler.js';

const router = Router();

router.get('/', asyncHandler(search));

export default router;
