import { PrismaClient } from "@prisma/client";
import errorHandler from "../utils/error.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  // Trim whitespace
  username = username?.trim();
  email = email?.trim();
  password = password?.trim();

  // ตรวจสอบว่าข้อมูลที่จำเป็นถูกป้อนไว้
  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    //check email already
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return next(errorHandler(500, "Internal Server Error"));
  }
};

export const signin = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!validUser) {
      return res.status(401).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compareSync(
      password,
      validUser.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign;

    console.log("success");
  } catch (error) {
    console.error("Error details:", error); // Log the error for debugging
    return next(errorHandler(500, error.message || "Internal Server Error"));
  }
};
