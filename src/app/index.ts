// Import Used Package
import express from 'express';
import { logger } from '../utils/logger';
import pinoHttp from 'pino-http';
import routes from '../routes/index';
import { errorHandler } from '../middlewares/errorHandler.middleware';

// Inisialisasi App
const app = express();
const PORT = process.env.PORT;

// Register Middleware
app.use(express.json()); // Default: Jangan dihapus
app.use(pinoHttp({ logger })); // Default: Jangan dihapus

// Register Routes
app.use('/api', routes);

// Middleware Handle Error
app.use(errorHandler); // Default: Jangan dihapus

const server = app.listen(PORT, () => {
  const address = server.address();
  const actualPort = typeof address === 'string' ? address : address?.port;

  logger.info({ event: 'SERVER_START', port: actualPort }, `Server berjalan di http://localhost:${actualPort}`);
});
server.on('error', (error: any) => {
  if (error.code === 'EADDRINUSE') {
    logger.fatal({ event: 'PORT_CLASH', port: PORT }, `Port ${PORT} sudah digunakan aplikasi lain`);
    process.exit(1); // Paksa matiin biar ga jalan diem-diem
  }
});