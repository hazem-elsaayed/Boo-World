const db = require('../db/connect');
const request = require('supertest');
const app = require('../app').app;

beforeAll(async () => {await db.connect('test_db')});

describe('POST /profile', () => {
  it('should create profile successfully', async () => {
    const res = await request(app).post('/profile').send({
      name: 'hazem',
      description: 'Adolph Larrue Martinez III.',
      mbti: 'ISFJ',
      enneagram: '9w3',
      variant: 'sp/so',
      tritype: 725,
      socionics: 'SEE',
      sloan: 'RCOEN',
      psyche: 'FEVL',
      image: 'https://soulverse.boo.world/images/1.png',
    });
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('successfully created a new profile ')
  });
});

describe('get /profile', () => {
  it('should get profile successfully', async () => {
    const res = await request(app).get(`/profile/?name=hazem`).send();
    expect(res.statusCode).toBe(200)
  });
});
