import { test, expect } from '@playwright/test';
import { api } from '../utils/apiClient';

test('Read item list', async () => {
  const response = await api.get('/items');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBeTruthy();
});