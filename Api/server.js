import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(userRoute);
app.use(authRoute);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
