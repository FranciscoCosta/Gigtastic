import express from "express";

import { verifyToken } from "../midllewares/verifyToken.js";
import {
  addGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controller/gigController.js";

const gigRoute = express.Router();

gigRoute.post("/api/v1/gig", verifyToken, addGig);
gigRoute.delete("/api/v1/gig/:id", verifyToken, deleteGig);
gigRoute.get("/api/v1/gig/:id", getGig);
gigRoute.get("/api/v1/gigs", verifyToken, getGigs);

export default gigRoute;
