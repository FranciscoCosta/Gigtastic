import express from "express";
import { register, login, logout } from "../controller/authController.js";
import { verifyRegister, verifyInputs } from "../midllewares/verifyRegister.js";

const authRouter = express.Router();

authRouter.post("/api/v1/register", verifyInputs, verifyRegister, register);
authRouter.post("/api/v1/login", login);
authRouter.post("/api/v1/logout", logout);

export default authRouter;
