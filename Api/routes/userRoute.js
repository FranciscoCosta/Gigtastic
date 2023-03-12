import express from "express";
import { deleteUser } from "../controller/userContoller.js";

const userRouter = express.Router();

userRouter.delete("/api/v1/user/:id", deleteUser);

export default userRouter;
