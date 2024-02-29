import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// form data configuration
app.use(express.json({ limit: "16kb" }));
// url data configuration
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//static file configuration
app.use(express.static("public"));
//cookie configuration
app.use(cookieParser());

export { app };
