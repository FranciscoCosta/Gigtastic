import express from "express";
import { verifyToken } from "../midllewares/verifyToken.js";
import {
  getOrders,
  intent,
  confirmOrders,
} from "../controller/orderController.js";

const orderRoute = express.Router();

orderRoute.get("/api/v1/orders", verifyToken, getOrders);
// orderRoute.post("/api/v1/order/:id", verifyToken, addOrder);
orderRoute.post("/create-payment-intent/:id", verifyToken, intent);
orderRoute.put("/api/v1/orders", verifyToken, confirmOrders);

export default orderRoute;
