import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevents XSS attacks cross-site scripting attacks //study about this
    sameSite: "strict", //csrf attacks cross-site request foregery attacks //study about this
    secure: process.env.NODE_ENV !== "develoment",
  });
  return token;
};
