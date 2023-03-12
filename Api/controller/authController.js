import { registerService, loginService } from "../service/authService.js";

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
    const result = await loginService(req);
    if (result) {
      const { _doc } = result;
      return res.status(200).json({ ..._doc });
    }
    return res.status(400).json({ message: "User not logged in!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const logout = async (req, res) => {};
