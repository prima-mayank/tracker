import { type Request, type Response, type NextFunction } from 'express';
import { type ZodSchema } from 'zod';

export const validate =
  (_schema: ZodSchema) =>
  (_req: Request, _res: Response, _next: NextFunction): void => {
    // TODO: implement in Step 2
  };
