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
    const result = await loginService(req, res);
    if (result) {
      const token = await createToken(result);
      console.log(token);
      const { _doc } = result;
      return res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ ..._doc });
    }
    return res.status(404).json({ message: "User did not logged in!" });
  } catch (error) {
    res.status(500).send(error.message);
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
