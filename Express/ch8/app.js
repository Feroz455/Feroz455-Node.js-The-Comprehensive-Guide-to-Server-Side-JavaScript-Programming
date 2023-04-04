const express = require("express");
const student = require("./routes/studentRoute");
const app = express();
const port = 3000;
app.use("/", student);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
