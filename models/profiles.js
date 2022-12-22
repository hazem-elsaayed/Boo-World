const { Schema, model } = require('mongoose');

const profilesSchema = new Schema(
  {
    name: { type: String, unique: true },
    description: String,
    mbti: String,
    enneagram: String,
    variant: String,
    tritype: Number,
    socionics: String,
    sloan: String,
    psyche: String,
    image: {
      type: String,
      default: 'https://soulverse.boo.world/images/1.png',
    },
  },
  { timestamps: true }
);

exports.Profiles = model('profiles', profilesSchema);
