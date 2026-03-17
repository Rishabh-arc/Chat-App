import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config(); //loads environment variables from .env.
const PORT = process.env.PORT;
const __dirname = path.resolve();
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port PORT:" + PORT);
  connectDb();
});
