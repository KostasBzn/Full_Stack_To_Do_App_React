import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    console.log("user auth:", req.user);

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default auth;
