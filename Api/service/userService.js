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
