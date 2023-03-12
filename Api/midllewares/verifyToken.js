import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
  const id = req.params.id;
  const token = req.cookies.token;
  const user = await User.findById(id);
  console.log("entrei no verify token");
  if (!token) return res.status(404).json({ message: "Token not found!" });
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
    if (decodedToken.id !== id)
      return res.status(404).json({ message: "Unauthorized" });
    console.log("passei no verify token");
    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized" });
  }
};
