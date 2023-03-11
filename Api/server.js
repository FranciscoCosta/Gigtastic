import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose.set("strictQuery", true);

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
} catch (err) {
  console.log(err);
}

app.listen(1234, () => {
  console.log("Backend server runing");
});
