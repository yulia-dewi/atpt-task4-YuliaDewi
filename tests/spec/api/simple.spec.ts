import { test, expect } from '@playwright/test';

test.use({
  baseURL: 'https://reqres.in',
  extraHTTPHeaders: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1'
  },
});

test.describe.configure({ mode: 'serial' });

test.describe('API Testing dengan Reqres.in', () => {

    test('GET /users?page=2 : List Users', async ({ request }) => {
      const response = await request.get('/api/users?page=2');
      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(Array.isArray(body.data)).toBeTruthy();
      expect(body.data[0]).toMatchObject({
        id: expect.any(Number),
        email: expect.any(String),
      });
    });
  
    test('POST /users : Create New User', async ({ request }) => {
      const response = await request.post('/api/users', {
        data: { name: 'morpheus', job: 'leader' }
      });

      const body = await response.json();

      expect(response.status()).toBe(201);
      expect(body).toMatchObject({
        name: 'morpheus',
        job: 'leader',
        id: expect.any(String),
        createdAt: expect.any(String),
      });
    });
  
    test('PUT /users/2 : Update Existing User', async ({ request }) => {
      const response = await request.put('/api/users/2', {
        data: { name: 'morpheus', job: 'zion resident' }
      });

      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(body).toMatchObject({
        name: 'morpheus',
        job: 'zion resident',
        updatedAt: expect.any(String),
      });
    });
  
    test('DELETE /users/2 : Delete User', async ({ request }) => {
      const response = await request.delete('/api/users/2');

      expect(response.status()).toBe(204);
      const text = await response.text();
      expect(text).toBe('');
    });
  });
