import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const createToken = (user) => {
  const { _doc } = user;
  const { username, _id, email } = _doc;
  const token = jwt.sign(
    {
      id: _id,
      username,
      email,
    },
    process.env.SECRET_JWT,
    {
      expiresIn: "6h",
    }
  );

  return token;
};

const verifyToken = async (id, token) => {
  const user = await User.findById(id);
  console.log(id);
  if (!token) return false;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
    if (decodedToken.id !== id) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export { createToken, verifyToken };
