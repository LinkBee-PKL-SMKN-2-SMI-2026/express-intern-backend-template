import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.ts';
import { ValidationError } from '../utils/ValidationError.ts';
import { logger } from '../utils/logger.ts';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.log('\n====== 🚨 ADA ERROR MASUK 🚨 ======');
  console.log('Wujud Error Asli:', err);
  console.log('Tipe Error:', typeof err);
  console.log('Nama Error:', err?.name);
  console.log('=====================================\n');

  if (err instanceof ValidationError) {
    logger.warn({ event: 'VALIDATION_ERROR', statusCode: err.statusCode, message: err.message });
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  if (err instanceof AppError) {
    logger.warn({ event: 'APP_ERROR', statusCode: err.statusCode, message: err.message });
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  logger.error({ event: 'UNHANDLED_ERROR', message: err.message, stack: err.stack });
  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server (BARU NIH)',
  });
};
