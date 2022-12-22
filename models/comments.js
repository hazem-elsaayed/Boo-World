const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'accounts' },
    account: { type: Schema.Types.ObjectId, ref: 'accounts' },
    liked_by: [{ type: Schema.Types.ObjectId, ref: 'accounts' }],
    title: String,
    content: String,
    likes: { type: Number, default: 0 },
    MBTI: {
      type: String,
      default: null,
      enum: {
        values: [
          null,
          'INFP',
          'INFJ',
          'ENFP',
          'ENFJ',
          'INTJ',
          'INTP',
          'ENTP',
          'ENTJ',
          'ISFP',
          'ISFJ',
          'ESFP',
          'ESFJ',
          'ISTP',
          'ISTJ',
          'ESTP',
          'ESTJ',
        ],
        message: '{VALUE} is not supported',
      },
    },
    Enneagram: {
      type: String,
      default: null,
      enum: {
        values: [
          null,
          '1w2',
          '2w3',
          '3w2',
          '3w4',
          '4w3',
          '4w5',
          '5w4',
          '5w6',
          '6w5',
          '6w7',
          '7w6',
          '7w8',
          '8w7',
          '8w9',
          '9w8',
          '9w1',
        ],
        message: '{VALUE} is not supported',
      },
    },
    Zodiac: {
      type: String,
      default: null,
      enum: {
        values: [
          null,
          'Aries',
          'Taurus',
          'Gemini',
          'Cancer',
          'Leo',
          'Virgo',
          'Libra',
          'Scorpio',
          'Sagittarius',
          'Capricorn',
          'Aquarius',
          'Pisces',
        ],
        message: '{VALUE} is not supported',
      },
    },
  },
  { timestamps: true }
);

exports.Comments = model('comments', commentSchema);
