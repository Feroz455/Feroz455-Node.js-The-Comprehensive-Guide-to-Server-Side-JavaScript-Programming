import express from "express";
import { aboutcontroller } from "../controllers/aboutController.js";
import { homecontroller } from "../controllers/homeController.js";
const router = express.Router();

router.get("/", homecontroller);
router.get("/about", aboutcontroller);

export default router;
