import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token; // using "token" keyword beacause the token we sent was called "token"
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthroised - No token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthroised - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }

    req.user = user; // we are sending the user with the reponse that the function after this will get access to all the fields except the password field as we have excluded that
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
