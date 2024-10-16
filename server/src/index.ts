require("dotenv").config();
const connectDatabase = require("./db/index");


(async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error(
        "MongoDB connection string not provided in environment variables"
      );
    }
    await connectDatabase();
  } catch (error) {
    console.info(error);
    process.exit(1);
  }
})();
