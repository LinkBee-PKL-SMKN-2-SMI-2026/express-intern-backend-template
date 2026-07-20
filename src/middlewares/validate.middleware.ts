import type { Request, Response, NextFunction } from 'express';
import type { ZodObject } from 'zod';
import { ZodError } from 'zod';
import { AppError } from '../utils/AppError.ts';

export const validate =
  (schema: ZodObject) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.issues.map((e) => e.message).join(', ');
        next(new AppError(errorMessage, 400));
      } else {
        next(error);
      }
    }
  };
