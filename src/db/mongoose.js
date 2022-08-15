const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SnEaKeRs-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// Run the following command to connect to MongoDB database
// /Users/fernandocorrearuiz/mongodb/bin/mongod --dbpath=/Users/fernandocorrearuiz/mongodb-data
