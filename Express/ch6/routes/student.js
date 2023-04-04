const express = require("express");
const router = express.Router();

router.get("/student/all", (req, res) => {
  res.send("All student");
});

router.post("/student/create", (req, res) => {
  res.send("New student Created");
});

router.put("/student/update", (req, res) => {
  res.send("Student updated");
});

router.delete("/student/delete", (req, res) => {
  res.send("Student deleted");
});

module.exports = router;
