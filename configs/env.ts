import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:8000',
};