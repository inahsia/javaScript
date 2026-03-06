import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const secret=process.env.SECRET;
export const generateToken=(user)=>{
  try{
  const token=jwt.sign({email:user.email,
    role:user.role,
  }
    ,secret,
    {expiresIn:"1h"})

    return token;
  }
  catch(error){
    console.log(error.message);
  }
}

export const verifyToken=(token)=>{
  const decoded=jwt.verify(tokens,secret);
  if(!decoded){
    throw new Error("not valid tokens");;
  }
  req.user=decoded;
  next()

}

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded; // contains email + role
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};