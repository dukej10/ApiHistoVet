import { Router } from "express";
const router = Router();

// Controllers
import * as clientsCtrl from "../controllers/clients.controller";

//Rutas
router.get("/", clientsCtrl.getClients);
router.post("/", clientsCtrl.createClient);
router.get("/:clientId", clientsCtrl.getClientById);
router.put("/:clientId", clientsCtrl.updateClientById);
router.delete("/:clientId", clientsCtrl.deleteClientById);

export default router;
