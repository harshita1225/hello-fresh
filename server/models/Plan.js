const mongoose = require("mongoose");

const { Schema } = mongoose;

const planSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
      unique: true,
    },
    planname: [],
    numberpeople: {
      type: Number,
      required: true,
    },
    recipeweek: {
      type: Number,
      required: true,
    },
    creditcard: {
      type: Number,
      required: true,
    },
    cvv: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", planSchema);
