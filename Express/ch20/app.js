import express from "express";
import { connectDB } from "./db/connectdb.js";
import {
  getAllDocSpecifiFiled,
  getDocByField,
  getDocByFieldSpecifiFiled,
  getLimitedDoc,
  getSingleDoc,
} from "./model/student.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//Connecting database to app
connectDB(DATABASE_URL);
//Insert Data into yout db
// createDoc();
// app.get("/", (req, res) => {
//   res.send(getAllDoc());
// });
// getAllDocSpecifiFiled();
// getSingleDoc();
// getDocByField();
// getDocByFieldSpecifiFiled();
getLimitedDoc();
app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
