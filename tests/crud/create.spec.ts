import { test, expect } from '@playwright/test';
import { api } from '../utils/apiClient';

test('Create item', async () => {
  const response = await api.post('/items', { name: 'Test Item', price: 10 });
  expect(response.status).toBe(201);
  expect(response.data.name).toBe('Test Item purpose');
});