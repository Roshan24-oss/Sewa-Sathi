import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ===================== SIGNUP =====================
export const Signup = async (req, res) => {
  try {
    const { fullName, email, password, phone,role,services } = req.body;

    // validation
    if (!fullName || !email || !password || !phone || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role,
      services:role==="provider"?services:null,
    });

    // generate jwt token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone:user.phone,
        role:user.role,
        services:user.services
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===================== SIGNIN =====================
export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate jwt token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Signin successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone:user.phone,
        role:user.role,
        services:user.services
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
