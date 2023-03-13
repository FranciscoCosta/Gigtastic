import jwt from "jsonwebtoken";

export const createToken = (user) => {
  const { _doc } = user;
  const { username, _id, email, isSeller } = _doc;
  const token = jwt.sign(
    {
      id: _id,
      username,
      email,
      isSeller,
    },
    process.env.SECRET_JWT,
    {
      expiresIn: "6h",
    }
  );

  return token;
};
