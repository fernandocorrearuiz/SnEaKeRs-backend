const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const productRouter = require("./routers/product");

const app = express();
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
