require("dotenv").config();
import app from "./app";
import connectDatabase from "./db";

(async () => {
  try {
    if (!process.env.PORT) {
      throw new Error("PORT number not provided in environment variables");
    }
    if (!process.env.MONGO_URI) {
      throw new Error(
        "MongoDB connection string not provided in environment variables"
      );
    }
    app;
    await connectDatabase();
  } catch (error) {
    console.info(error);
    process.exit(1);
  }
})();
