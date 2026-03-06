import express from 'express'
import jwt from 'jsonwebtoken'
export const generateToken=(email,userId)=>{
  const token=jwt.sign({email,userId},
    process.env.SECRET,
    {expiresIn:'1h'});

  return token;
}
export const middleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No authorization header" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};