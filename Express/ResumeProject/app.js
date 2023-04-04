import express from "express";
import router from "./routes/web.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";
//app engine
app.set("view engine", "ejs");
//Setup the directory where template files are located
app.set("views", "./views");
//Css file load
app.use(express.static(join(process.cwd(), "public")));

//Load routes
app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
