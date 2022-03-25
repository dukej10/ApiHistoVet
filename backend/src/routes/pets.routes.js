import { Router } from "express";
const router = Router();

//Controllers;
import * as pets from "../controllers/pets.controller";

//Rutas
router.get("/", pets.getPets);
router.post("/", pets.createPet);
router.get("/:petId", pets.getPetById);
router.put("/:petId", pets.updatePetById);
router.delete("/:petId", pets.deletePetById);

export default router;
