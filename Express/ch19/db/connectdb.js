import mongoose from "mongoose";

export const connectDB = async (DATABASE_URL) => {
  const DB_OPTIONS = {
    dbName: "schooldb",
  };
  try {
    //mongodb://admin:password@localhost:27017/admin
    //"mongodb://Supersonic:supersonic@127.0.0.1:27017/schooldb?authSource=schooldb";
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
