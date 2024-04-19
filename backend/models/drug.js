const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const priceSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const doseSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const drugSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  drug_form: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  price: {
    type: priceSchema,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  dose: {
    type: doseSchema,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = model("Drug", drugSchema);
