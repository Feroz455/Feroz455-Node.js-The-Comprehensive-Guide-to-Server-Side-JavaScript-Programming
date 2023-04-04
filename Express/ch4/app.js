const express = require("express");
const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.send("Hello Wold");
});
app.get("/save", (req, res) => {
  res.send("Hello Save");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
