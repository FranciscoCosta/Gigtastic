import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(403).json({ message: "Token dosent exist!" });

  jwt.verify(token, process.env.SECRET_JWT, async (err, payload) => {
    if (err) res.status(403).json({ message: "Token dosent exist!" });
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    console.log("passei vToken");
    next();
  });
};
