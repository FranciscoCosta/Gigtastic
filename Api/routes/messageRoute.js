import express from "express";
import { verifyToken } from "../midllewares/verifyToken.js";
import { createMessage, getMessages } from "../controller/messageController.js";

const messageRoute = express.Router();

messageRoute.post("/api/v1/message", verifyToken, createMessage);
messageRoute.get("/api/v1/message/:id", verifyToken, getMessages);

export default messageRoute;
