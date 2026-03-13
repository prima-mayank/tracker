import { Router } from 'express';
import { register, login, logout, me } from '../controllers/auth.controller.js';
import { asyncHandler } from '../lib/async-handler.js';
import { authRateLimit } from '../middleware/rate-limit.middleware.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', authRateLimit, asyncHandler(register));
router.post('/login', authRateLimit, asyncHandler(login));
router.post('/logout', requireAuth, asyncHandler(logout));
router.get('/me', requireAuth, asyncHandler(me));

export default router;
