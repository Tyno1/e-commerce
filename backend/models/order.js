const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    customerId: { type: String, required: true },
    paymentIntentId: { type: String },
    products: [
      {
        name: { type: String, required: true },
        drugId: {
          type: Schema.Types.ObjectId,
          ref: "Drug",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, default: "pending" },
    order_status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
