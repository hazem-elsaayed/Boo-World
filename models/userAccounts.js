const { Schema, model } = require('mongoose');

const accountsSchema = new Schema(
  {
    name: { type: String, unique: true },
  },
  { timestamps: true }
);

exports.Accounts = model('accounts', accountsSchema);
