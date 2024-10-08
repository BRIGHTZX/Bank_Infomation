import express from "express";
import dotenv from "dotenv";
import { PgConnect } from "./utils/config.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

PgConnect();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000!");
});
