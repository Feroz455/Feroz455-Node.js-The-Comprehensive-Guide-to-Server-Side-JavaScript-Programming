import express from "express";
import { connectDB } from "./db/connectdb.js";
import { createDoc, studentModel } from "./model/student.js";

const app = express();
const port = process.env.PORT || "3000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//"mongodb://Supersonic:supersonic@127.0.0.1:27017/schooldb?authSource=schooldb";
connectDB(DATABASE_URL);
//Create and save Document
createDoc();
// createDoc("Jorge", "25", 8666.45, ["Gamming", "swimming"], true, [
//   { value: "This is a good one" },
// ]);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
