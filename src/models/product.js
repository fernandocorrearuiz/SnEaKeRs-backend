const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be a positive number");
      }
    },
  },
});

module.exports = Product;
