import { Router } from "express";
import {registerUser} from ".../controllers/auth.js"

const authRouter = Router();

authRouter.post("/register", registerUser)

export default authRouter;