import {
  registerService,
  loginService,
  logoutService,
} from "../service/authService.js";
import { createToken } from "../utils/JwtToken.js";

export const register = async (req, res) => {
  try {
    const result = await registerService(req);
    if (result) return res.status(201).json({ message: "User Created!" });
    return res.status(400).json({ message: "User not created!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginService(req, res);
    console.log(user);
    if (user) {
      const token = await createToken(user);
      console.log(token);
      const { password, ...info } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send(info);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    const result = await logoutService(req, res);
    if (!result) {
      return res.status(404).json({ message: "User didn´t logout" });
    }
    return res.status(200).json({ message: "User logout successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
