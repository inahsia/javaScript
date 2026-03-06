import jwt from 'jsonwebtoken'

export const generateToken=(email,userId)=>{
  const token=jwt.sign({email,userId},
    process.env.SECRET,
    {expiresIn:"1h"}
  )

   return token;
}

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
