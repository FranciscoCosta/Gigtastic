import express from "express";
import { deleteUser, addUser } from "../controller/userContoller.js";
import { verifyToken } from "../midllewares/verifyToken.js";

const userRouter = express.Router();

userRouter.delete("/api/v1/user/:id", verifyToken, deleteUser);
userRouter.get("/api/v1/user/:id", addUser);

export default userRouter;
