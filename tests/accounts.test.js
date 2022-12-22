const db = require('../db/connect');
const request = require('supertest');
const app = require('../app').app;

beforeAll(async () => {await db.connect('test_db')});

describe('POST /account', () => {
  it('should create profile successfully', async () => {
    const res = await request(app).post('/account').send({
      name: 'hazem',
    });
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('successfully created a new account')
  });

  it('should return error (dublicate entry)', async () => {
    const res = await request(app).post('/account').send({
      name: 'hazem',
    });
    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('E11000 duplicate key error collection: test_db.accounts index: name_1 dup key: { name: "hazem" }')
  });
});