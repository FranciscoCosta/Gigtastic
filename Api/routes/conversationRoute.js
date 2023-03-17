import express from "express";
import {
  getConversations,
  getConversation,
  createConversation,
  updateConversation,
} from "../controller/conversationController.js";

import { verifyToken } from "../midllewares/verifyToken.js";

const conversationRoute = express.Router();

conversationRoute.get("/api/v1/conversations", verifyToken, getConversations);
conversationRoute.post("/api/v1/conversation", verifyToken, createConversation);
conversationRoute.get("/api/v1/conversation/:id", verifyToken, getConversation);
conversationRoute.put(
  "/api/v1/conversation/:id",
  verifyToken,
  updateConversation
);

export default conversationRoute;
