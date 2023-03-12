import express from "express";
import { deleteUser } from "../controller/userContoller.js";
import { verifyToken } from "../midllewares/verifyToken.js";

const userRouter = express.Router();

userRouter.delete("/api/v1/user/:id", verifyToken, deleteUser);

export default userRouter;
