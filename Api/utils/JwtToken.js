import jwt from "jsonwebtoken";

export const createToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
    isSeller: user.isSeller,
  };
  return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "1d" });
};
