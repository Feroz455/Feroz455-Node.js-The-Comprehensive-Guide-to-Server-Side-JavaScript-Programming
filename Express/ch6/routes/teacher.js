const express = require("express");
const router = express.Router();

router.get("/teacher/all", (req, res) => {
  res.send("All teacher");
});

router.post("/teacher/create", (req, res) => {
  res.send("New teacher Created");
});

router.put("/teacher/update", (req, res) => {
  res.send("teacher updated");
});

router.delete("/teacher/delete", (req, res) => {
  res.send("teacher deleted");
});

module.exports = router;
