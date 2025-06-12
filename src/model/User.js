const mongoose = require('../database/db.js');
const { Schema } = mongoose;

const User = mongoose.model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'rh', 'user'],
      default: 'user',
    },
  })
);

module.exports = User;