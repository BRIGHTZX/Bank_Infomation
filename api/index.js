import express from "express";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/api/auth", authRoute);

app.listen(4000, () => {
  console.log("Server is running on port 4000!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
