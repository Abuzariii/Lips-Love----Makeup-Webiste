const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const makeupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    image_link: {
      type: String,
      required: true,
    },
    product_type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    product_link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tag_list: {
      type: [String],
    },
    product_colors: {
      type: [Schema.Types.Mixed],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Makeup", makeupSchema, "Makeup Data");
