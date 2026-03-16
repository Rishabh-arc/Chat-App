import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

dotenv.config(); //loads environment variables from .env.
const PORT = process.env.PORT;
app
app.use(express.json({ limit: "5mb" })); //increase the limit to 5mb so that "PayloadTooLargeError" dosent happen
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(cookieParser()); //This lets the backend read cookies from requests.
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
/*The cors dosent allow the frontend communicate with the backend because they are on seperate ports so we have to specify that the frontend is running on this port and the cors should allow it  */

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on port PORT:" + PORT);
  connectDb();
});
