import express from "express";
import web from "./routes/web.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";

//Setup the directory where template files are located
app.set("views", "./views");

//Css file load
app.use(express.static(join(process.cwd(), "public")));
//Setup the template Engine to use
app.set("view engine", "ejs");

app.use("/", web);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
