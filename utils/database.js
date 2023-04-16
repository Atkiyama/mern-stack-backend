const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thisisatkiyama:CWZjYR7QbiMyYbsv@cluster0.jfaxdp8.mongodb.net/appDataBase?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnect to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;
