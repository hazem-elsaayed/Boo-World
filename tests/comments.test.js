const db = require('../db/connect');
const request = require('supertest');
const { addComment } = require('./helpers/addComment');
const { Comments } = require('../models/comments');
const { addAccount: addProfile, addAccount } = require('./helpers/addAccount');
const app = require('../app').app;

beforeAll(async () => {
  await db.connect('test_db');
});

describe('POST /:accountName/comment', () => {
  it('should create comment successfully', async () => {
    const res = await request(app).post('/hazem/comment').send({
      owner: '63a310753ee3cc997b124cc9',
      title: '1st comment',
      content: 'very useful content',
      MBTI: 'INTJ',
      Enneagram: '2w3',
      Zodiac: 'Cancer'
    });
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('successfully added the comment');
  });

  it('should return validation error', async () => {
    const res = await request(app).post('/hazem/comment').send({
      title: '1st comment',
      content: 'very useful content',
      MBTI: 'INTJ',
      Enneagram: '2w3',
      Zodiac: 'Cancer'
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Validation error');
  });
})

describe('GET /:accountName/comments', () => {
  it('should create comment successfully', async () => {
    await addComment()
    const res = await request(app).get('/hazem/comments');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it('check filter is working', async () => {
    const res = await request(app).get('/hazem/comments?filter=Zodiac');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
})

describe('POST /:commentId/likes', () => {
  it('should increase likes count', async () => {
    let comment = await addComment()
    let account = await addAccount()
    const res = await request(app).patch(`/${comment._id}/likes`).send({
      likedBy: account.name
    });
    let updatedComment = await Comments.findById(comment._id)
    expect(res.statusCode).toBe(200);
    expect(updatedComment.likes).toBe(1);
  });

  it('should decrease likes count', async () => {
    let comment = await Comments.findOne({likes: 1})
    const res = await request(app).patch(`/${comment._id}/likes`).send({
      likedBy: 'hazem'
    });
    let updatedComment = await Comments.findById(comment._id)
    expect(res.statusCode).toBe(200);
    expect(updatedComment.likes).toBe(0);
  });

  it('should return validation error', async () => {
    let comment = await Comments.findOne({likes: 0})
    const res = await request(app).patch(`/${comment._id}/likes`);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Validation error');;
  });
})
