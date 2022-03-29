import User from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config";

export const SingUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  console.log(req.body);
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // expira en un día
  });
  res.status(200).json({ token });
};
export const SingIn = async (req, res) => {
  res.json("SignIn");
};
