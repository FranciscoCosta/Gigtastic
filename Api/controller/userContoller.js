import { deleteUserService } from "../service/userService.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return res.status(403).send("You can only delete your account!");
  }
  try {
    const result = await deleteUserService(req, res);
    if (result)
      return res.status(201).json({ message: `User: ${result} deleted!` });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
