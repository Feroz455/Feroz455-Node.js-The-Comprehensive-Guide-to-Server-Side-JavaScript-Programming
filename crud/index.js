import express from "express";
import { connectDB } from "./connectdb.js";
import { router } from "./web.js";
import bodyParser from "body-parser";

const app = express();
const DATABASE_URL = "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);
app.use(bodyParser.json());
app.use(express.json());
// ... other Express app configurations and routes
app.use("/Student", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000 http://localhost:3000");
});
