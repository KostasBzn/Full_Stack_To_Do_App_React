import express from "express";
import {
  findUser,
  signinUser,
  signupUser,
  getAllUsers,
} from "../controllers/usersController.js";
import auth from "../middleware/user-auth.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.post("/signup", signupUser);

router.post("/signin", signinUser);

router.get("/fetchusers", getAllUsers);

router.get("/loggeduser", auth, findUser);

export default router;
