const { body } = require('express-validator');

exports.addProfileSchema = [
  body('name').isString().withMessage('Name must be string'),
  body('name').exists().withMessage('Name is not found'),
  body('description').isString().withMessage('description must be string'),
  body('mbti').isString().withMessage('mbti must be string'),
  body('enneagram').isString().withMessage('enneagram must be string'),
  body('variant').isString().withMessage('variant must be string'),
  body('socionics').isString().withMessage('socionics must be string'),
  body('sloan').isString().withMessage('sloan must be string'),
  body('psyche').isString().withMessage('psyche must be string'),
  body('image').isURL().withMessage('image must be url'),
];

exports.addAccountSchema = [
  body('name').isString().withMessage('Name must be string'),
  body('name').exists().withMessage('Name is not found'),
];

exports.addCommentSchema = [
  body('owner').isString().withMessage('owner must be string'),
  body('owner').exists().withMessage('owner is not found'),
  body('title').isString().withMessage('title must be string'),
  body('title').exists().withMessage('title is not found'),
  body('content').isString().withMessage('content must be string'),
  body('content').exists().withMessage('content is not found'),
  body('Enneagram').isString().withMessage('Enneagram must be string'),
  body('MBTI').isString().withMessage('MBTI must be string'),
  body('Zodiac').isString().withMessage('Zodiac must be string'),
];

exports.likesSchema = [
  body('likedBy').isString().withMessage('likedBy must be string'),
  body('likedBy').exists().withMessage('likedBy is not found'),
];
