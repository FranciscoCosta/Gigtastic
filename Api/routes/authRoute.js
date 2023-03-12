import express from "express";
import { register, login, logout } from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/api/v1/register", register);

export default authRouter;
