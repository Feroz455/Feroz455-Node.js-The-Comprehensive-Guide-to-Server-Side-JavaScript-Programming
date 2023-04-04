import express from "express";
import { homecontroller } from "../controllers/homeController.js";
const router = express.Router();

router.get("/", homecontroller);

export default router;
