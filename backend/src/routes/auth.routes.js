import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
router.post("/signin", authCtrl.SingIn);
router.post("/signup", authCtrl.SingUp);
export default router;
