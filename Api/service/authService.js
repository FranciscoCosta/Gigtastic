import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerService = async (req) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    return newUser;
  } catch (err) {
    console.log(err, "Serviçe Error");
  }
};
