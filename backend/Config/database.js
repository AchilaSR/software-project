const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://achila:achila@cluster0.06ufv.mongodb.net/ElearnDB?retryWrites=true&w=majority"
    );
    console.log(`mongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.massege}`);
    process.exit();
  }
};

module.exports = connectDB;
