import { Router } from "express";
import {
  removeAction,
  listAction,
  formAction,
  saveAction,
  CreateAction,
} from "./controller.js";

const router = Router();

router.get("/", listAction);
router.get("/deletes/:id", removeAction);
router.get("/form/:id", formAction);
router.post("/save", saveAction);
router.post("/new", CreateAction);
export { router };
