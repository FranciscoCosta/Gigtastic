import express from "express";

import { verifyToken } from "../midllewares/verifyToken.js";
import {
  addReview,
  deleteReview,
  getReviews,
} from "../controller/reviewController.js";

const reviewRoute = express.Router();

reviewRoute.post("/api/v1/review", verifyToken, addReview);
reviewRoute.delete("/api/v1/review/:gigId", verifyToken, deleteReview);
reviewRoute.get("/api/v1/reviews/:gigId", getReviews);

export default reviewRoute;
