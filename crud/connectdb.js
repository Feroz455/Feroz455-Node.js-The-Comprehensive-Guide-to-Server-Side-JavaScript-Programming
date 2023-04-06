import mongoose from "mongoose";

async function connectDB(DATABASE_URL) {
  try {
    const option = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "schooldb",
    };
    const connection = await mongoose.connect(DATABASE_URL, option);
    console.log("Connected to database:", connection.connection.name);
  } catch (err) {
    console.error("Failed to connect to database:", err.message);
  }
}

export { connectDB };
