const express = require("express");
const router = express.Router();
const mymodule = require("../controllers/studentController");

router.get("/student/all", mymodule.allstudent);

router.get("/student/delete/:id", mymodule.deleteStudent);
module.exports = router;
