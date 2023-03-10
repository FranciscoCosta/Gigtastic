import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerService = async (req, _res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    return newUser;
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const loginService = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ message: "User not found!" });
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return res.status(404).json({ message: "Wrong password or username!" });
    const { password, ...others } = user;
    return others;
  } catch (error) {
    return error;
  }
};

export const logoutService = async (req, res) => {
  try {
    res.clearCookie("token", {
      sameSite: "none",
      secure: true,
    });
    return true;
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
