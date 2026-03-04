import jwt from 'jsonwebtoken'

export const generateToken=(email)=>{
  const token=jwt.sign({email},
    process.env.SECRET,
    {expiresIn:"1h"}
  )

   return token;
}



export const authMiddleware=(req,res,next)=>{
  const authHeader=req.headers.authorization?.split(" ")[1];

  try{
    const decoded=jwt.verify(token, process.env.SECRET);
  req.user=decoded;
  next()
  }
  catch (error) {
    res.status(401).json({ message: "Invalid token" });
}
}