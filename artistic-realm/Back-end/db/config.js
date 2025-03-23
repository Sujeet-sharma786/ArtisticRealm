const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/paintingworld");
mongoose.set("strictQuery", true);  // Enforce strict query validation

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    // mongoose.set("strictQuery", true);
    console.log("Connection established");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;
