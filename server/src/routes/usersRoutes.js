import express from "express";
import {
  findUser,
  signinUser,
  signupUser,
  getAllUsers,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.post("/signup", signupUser);

router.post("/signin", signinUser);

router.get("/fetchusers", getAllUsers);

router.get("/:userId", findUser);

export default router;
