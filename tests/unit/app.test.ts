import request from 'supertest';
import { app } from '../../src/app';

describe('Routes - Index', () => {
  it('GET / - Deve retornar uma mensagem de "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello, World!');
  });
});
