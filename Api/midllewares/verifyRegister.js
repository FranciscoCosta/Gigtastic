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

export const verifyInputs = async (req, res, next) => {
  const { username, email, password, country } = req.body;
  if (!username || !email || !password || !country) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  if (username.length < 3) {
    return res
      .status(400)
      .json({ message: "Username must be at least 3 characters" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }
  if (country.length < 3) {
    return res
      .status(400)
      .json({ message: "Country must be at least 3 characters" });
  }
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  next();
};
