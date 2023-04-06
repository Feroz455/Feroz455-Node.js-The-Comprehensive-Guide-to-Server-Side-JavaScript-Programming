import express, { request, response } from "express";
const app = express();
import * as dotenv from "dotenv";
import { router as movieRouter } from "./movies/index.js";
import { connectDB } from "./Database/connections.js";
import { log } from "./middleware/log.js";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
dotenv.config();

const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);
//Global middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));
app.use("/movies", movieRouter);
app.get("/", (request, response) => {
  response.redirect("/movies");
});

app.listen(port, () => {
  console.log(`App is running on server http://localhost:${port}`);
});
