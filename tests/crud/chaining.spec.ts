import { test, expect } from '@playwright/test';
import { api } from '../utils/apiClient';

test('Chaining - Create and Update', async () => {
  const create = await api.post('/items', { name: 'Chain Item', price: 20 });
  const id = create.data.id;
  const update = await api.put(`/items/${id}`, { name: 'Chained Update', price: 25 });
  expect(update.status).toBe(200);
});