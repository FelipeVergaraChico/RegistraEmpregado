const moongose = require('../database/db.js');
const { Schema } = moongose;

const Employee = moongose.model(
  "Employee",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    hiredAt: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Employee;