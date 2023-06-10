const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product_name: {
      type: String,
      required: true,
    },
    photos: [],
    description: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
