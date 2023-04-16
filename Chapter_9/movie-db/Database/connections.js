import mongoose from "mongoose";

async function connectDB(DATABASE_URL) {
  try {
    const option = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "MoviesData",
    };
    const connection = await mongoose.connect(DATABASE_URL, option);
    console.log("Connected to database:", connection.connection.name);
  } catch (error) {
    console.log("Failed to connect to database:", error.message);
  }
}
export { connectDB };
