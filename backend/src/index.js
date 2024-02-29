import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("app is runing at", port);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed !!!", err);
  });
