import mongoose from "mongoose";

export const connectDB = async (DATABASE_URL) => {
  try {
    //"mongodb://Supersonic:supersonic@127.0.0.1:27017/schooldb?authSource=schooldb";

    const DB_OPTIONS = {
      user: "Supersonic",
      pass: "supersonic",
      dbName: "schooldb",
      authSource: "schooldb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
