import express from 'express';
import pino from 'pino';

import dotenv from 'dotenv';
import pinoHttp from 'pino-http';
import PinoPretty  from 'pino-pretty';
dotenv.config();

const app=express();
const port=process.env.PORT;

console.log('envireonment',process.env.Node_env);

const logger = pino({
  level: 'trace',
  transport: process.env.NODE_ENV !== 'production'
    ? { target: 'pino-pretty' }
    : undefined
});

app.get('/', (req, res) => {
  logger.info('Home route accessed');
  res.send('hello world');
});


app.get('/contact-us', (req, res) => {
  logger.warn('Contact page response slightly delayed');
  res.send('contact page');
});


app.get('/q', (req, res) => {
  try {
    throw new Error('Database connection failed');
  } catch (err) {
    logger.error(err.message);
    res.status(500).send('Internal error');
  }
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
