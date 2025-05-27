import axios from 'axios';
import { config } from '../../configs/env';

export const api = axios.create({
  baseURL: config.baseUrl,
  headers: { 'Content-Type': 'application/json' },
});