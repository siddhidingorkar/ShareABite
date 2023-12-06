const mongoose = require("mongoose");

const db = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/ShareABite"
    );
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = db;
