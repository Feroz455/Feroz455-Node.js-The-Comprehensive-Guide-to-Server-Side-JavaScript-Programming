import express from "express";
import { join } from "path";
import { router } from "./routes/web.js";
const app = express();
const port = process.env.PORT || "3000";

//static files
app.use(express.static(join(process.cwd(), "public")));

app.use("/", router);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
