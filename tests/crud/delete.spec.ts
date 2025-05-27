import { test, expect } from '@playwright/test';
import { api } from '../utils/apiClient';

test('Delete item', async () => {
  const create = await api.post('/items', { name: 'Temp Item', price: 7 });
  const id = create.data.id;
  const del = await api.delete(`/items/${id}`);
  expect(del.status).toBe(204);
});