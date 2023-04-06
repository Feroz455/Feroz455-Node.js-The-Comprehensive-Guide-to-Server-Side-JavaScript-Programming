import expres from "express";
import { StudentController } from "./StudentController.js";
const router = expres.Router();

router.get("/", StudentController.getAllDoc);
router.post("/", StudentController.createDoc);
router.get("/:id", StudentController.getSingleDocById);
router.put("/:id", StudentController.UpdateDocById);
router.delete("/:id", StudentController.deleteDocById);

export { router };
