import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import gigRoute from "./routes/gigRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import orderRoute from "./routes/orderRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import messageRoute from "./routes/messageRoute.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

app.use(
  cors({
    origin: ["https://gigtastic.onrender.com", "https://gigtastic.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(userRoute);
app.use(authRoute);
app.use(gigRoute);
app.use(reviewRoute);
app.use(orderRoute);
app.use(conversationRoute);
app.use(messageRoute);

app.get("/", (req, res) => {
  res.send("Hello Gigtastic");
});

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong";

//   return res.status(errorStatus).send(errorMessage);
// });

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
