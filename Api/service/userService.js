import User from "../models/userModel.js";
import { verifyToken } from "../utils/JwtToken.js";

export const deleteUserService = async (req, res) => {
  const id = req.params.id;
  const token = req.cookies.token;
  const isVerifiedToken = await verifyToken(id, token);
  if (!isVerifiedToken) return null;
  try {
    const result = await User.findByIdAndDelete(id);
    return result.username;
  } catch (error) {
    return error;
  }
};
