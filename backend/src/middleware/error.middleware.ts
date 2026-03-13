import { type Request, type Response, type NextFunction } from 'express';

export const errorMiddleware = (
  _err: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction,
): void => {
  // TODO: implement global error handler
};
