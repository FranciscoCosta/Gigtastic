import express from "express";
import { verifyToken } from "../midllewares/verifyToken.js";
import { getOrders, addOrder } from "../controller/orderController.js";

const orderRoute = express.Router();

orderRoute.get("/api/v1/orders", verifyToken, getOrders);
orderRoute.post("/api/v1/order/:id", verifyToken, addOrder);

export default orderRoute;
