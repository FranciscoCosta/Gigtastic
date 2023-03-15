import User from "../models/userModel.js";

export const deleteUserService = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    return result.username;
  } catch (error) {
    return error;
  }
};

export const addUserService = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};
