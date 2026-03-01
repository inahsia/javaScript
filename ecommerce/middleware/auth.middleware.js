import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const protect=async(req,res,next)=>{
  try{
    const token=req.headers.authorization?.split(" ")[1];
    const decoded=jwt.verify(token,process.env.secret)
    const user=await User.findById(decoded.id);
    if (!user){
      throw new Error("user no found");
    }
    req.user=user;
    next();
  }
  catch(error){
    next(error);
  }
}