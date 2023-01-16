const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  cart: [
    {
      quantity: Number,
      plan: { type: Schema.Types.ObjectId, ref: "Plan" },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
