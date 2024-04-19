const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status", 
    required: true,
    default: null,
  },
  drugId: {
    type: Schema.Types.ObjectId,
    ref: "Drug",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = model("Cart", cartSchema);
