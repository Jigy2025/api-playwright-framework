import { test, expect } from '@playwright/test';
import { api } from '../utils/apiClient';

test('Update item', async () => {
  const create = await api.post('/items', { name: 'Old Item', price: 5 });
  const id = create.data.id;
  const update = await api.put(`/items/${id}`, { name: 'Updated Item', price: 15 });
  expect(update.status).toBe(200);
  expect(update.data.name).toBe('Updated Item');
});