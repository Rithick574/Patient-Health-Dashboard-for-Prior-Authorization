const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URI;
    if (!mongoUrl) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }
    await mongoose.connect(mongoUrl.trim());
    console.log(`
  o__ __o        o__ __o   
 <|     v\\      <|     v\\  
 / \\     <\\     / \\     <\\ 
 \\o/       \\o   \\o/     o/ 
  |         |>   |__  _<|  
 / \\       //    |       \\ 
 \\o/      /     <o>      / 
  |      o       |      o  
 / \\  __/>      / \\  __/>  
🍃🍃🍃🍃🍃🍃 MongoDB connected successfully!🍃🍃🍃🍃🍃🍃`);
  } catch (error: any) {
    console.error(`🍁 Database Connection failed 🍁`);
    console.error(error?.message);
    process.exit(1);
  }
};

module.exports = connectDB;
