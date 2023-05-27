import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

//mongoDB connection
await connectDB();

const app = new express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser())
app.use(fileUpload ());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", apiRoutes);

// Error handlers

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);
