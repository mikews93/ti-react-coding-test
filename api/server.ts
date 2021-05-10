import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bp from 'body-parser';

import rootRouter from './src/routers/rootRouter';

/**
 * initialize dot env
 */
dotenv.config({
    path: '.env'
});

/**
 * initiate server
 */
const server = express();
const PORT = process.env.API_PORT || 8000;
server.get('/', (req, res) => res.send('OK'));

/**
 * Implement router
 */
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use('/api',cors(), rootRouter);

/**
 * Maker server listen
 */
server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
