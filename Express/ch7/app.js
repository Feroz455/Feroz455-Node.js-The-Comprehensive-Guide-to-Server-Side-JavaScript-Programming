const express = require("express");
const app = express();
const port = process.env.PORT || "3000";

app.get("/student/delete/:id/and/:name", (req, res) => {
  console.log(req.params);
  res.send(`Student deleted ${req.params.id} ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
