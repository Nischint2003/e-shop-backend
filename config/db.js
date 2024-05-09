const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connection to db ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
