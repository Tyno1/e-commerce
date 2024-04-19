const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const statusSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = model("Status", statusSchema);
