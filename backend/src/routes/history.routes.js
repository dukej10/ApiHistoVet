import { Router } from "express";
const router = Router();

// Controllers
import * as historyCtrl from "../controllers/history.controller";

//Rutas
router.get("/", historyCtrl.getHistorys);
router.post("/", historyCtrl.createHistory);
router.get("/:historyId", historyCtrl.getHistoryById);
router.put("/:historyId", historyCtrl.updateHistoryById);
router.delete("/:historyId", historyCtrl.deleteHistoryById);

export default router;
