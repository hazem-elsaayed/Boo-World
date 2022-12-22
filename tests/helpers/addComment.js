const { Comments } = require('../../models/comments');

exports.addComment = async () => {
  return await Comments.create({
    owner: '63a310753ee3cc997b124cc9',
    title: 'lorem',
    content: 'very useful content',
    MBTI: 'INTJ',
    Enneagram: '2w3',
  });
};
