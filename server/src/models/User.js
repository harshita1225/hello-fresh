const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: String,
    location: String,
    verified: { type: Boolean, default: false },

    cart: [
      {
        quantity: Number,
        plan: { type: Schema.Types.ObjectId, ref: "Plan" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
