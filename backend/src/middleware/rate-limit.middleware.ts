import { type RequestHandler } from 'express';

export const authRateLimit: RequestHandler = (_req, _res, next) => {
  // TODO: implement in Step 2 (express-rate-limit, 5 req / 15 min per IP)
  next();
};
