const mongoose = require('../database/db.js');
const { Schema } = mongoose;

const Department = mongoose.model(
  "Department",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = Department;