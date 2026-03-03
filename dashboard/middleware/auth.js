import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const secret=process.env.SECRET;
export const tokengeneration=async(email)=>{
  const token=jwt.sign({
    email
  },secret,
  {expiresIn:"1hr"});

  return token ;
}


export const tokenVerification=async(token)=>{
  try{
    const decoded=jwt.verify(token,secret);
    return decoded;
  }
  catch(error){
    throw new Error("Token invalid ");
  }
}

export const  middleware=async(req,res,next)=>{
  const token=req.headers.authorization?.split(" ")[1];
  if(!token){
    return new Error("not valid token");
  }
  const decoded=tokenVerification(token);
    if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }
  req.user=decoded;
  next();
};