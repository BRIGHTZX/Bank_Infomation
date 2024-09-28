import { PrismaClient } from "@prisma/client";
import errorHandler from "../utils/error.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";

const prisma = new PrismaClient();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All Fields are required"));
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
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
