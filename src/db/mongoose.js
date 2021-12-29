const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SnEaKeRs-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

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

const product1 = new Product({
  name: "Rollers",
  price: 365,
});

product1
  .save()
  .then(() => {
    console.log(product1);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
