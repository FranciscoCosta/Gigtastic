import { deleteUserService } from "../service/userService.js";

export const deleteUser = async (req, res) => {
  try {
    const result = await deleteUserService(req, res);
    if (result)
      return res.status(201).json({ message: `User: ${result} deleted!` });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
