import User from "../models/userModel.js";

export const verifyRegister = async (req, res, next) => {
  const { username, email } = req.body;
  const checkUsername = await User.findOne({ username: username });
  const checkEmail = await User.findOne({ email: email });
  if (checkUsername) {
    return res.status(400).json({ message: "Username already exists!" });
  }
  if (checkEmail) {
    return res.status(400).json({ message: "Email already has one account" });
  }
  next();
};
