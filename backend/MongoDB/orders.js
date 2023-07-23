const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    orders: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Makeup Users Orders", ordersSchema);
