import User from "../models/user-schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const saltRounds = 10;
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.send({ success: true, newUser });
    console.log("User created successfully:", newUser);
  } catch (error) {
    console.error("Error creating account", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const signinUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    const matchPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!matchPassword || !user) {
      return res.send({ success: false, message: "Wrong e-mail or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: "Authentication sucessful",
      user,
      token,
    });

    console.log("User:", user);
    console.log("Token:", token);
  } catch (error) {
    console.error("Error signing in", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const findUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    res.send({ success: true, user });
  } catch (error) {
    console.error("Error finding the user", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    //console.log("Users fetched successfully:", users);
    res.send({ success: true, users });
  } catch (error) {
    console.error("Error fetching the users", error.message);
    res.send({ success: false, error: error.message });
  }
};
