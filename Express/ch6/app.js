// app.js
const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const studentRouter = require("./routes/student");
const teacherRouter = require("./routes/teacher");

app.use("/users", usersRouter);
app.use("/users", studentRouter);
app.use("/users", teacherRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
