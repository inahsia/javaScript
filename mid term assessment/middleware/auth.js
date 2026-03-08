import express from 'express'
import jwt from 'jsonwebtoken'

const SECRET=process.env.SECRET;
export const generateToken=(email,userId)=>{
  const token=jwt.sign({
    email,userId
  },SECRET,{
    expiresIn:'1h'
  });
  return token 
}


export const middleware=async(req,res,next)=>{
  try{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token){
      res.status.json("no token was provided");
    }
    const decoded=jwt.verify(token,SECRET);

    if(!decoded){
      throw new Error('token is not authenticated');
    }
    req.user=decoded;
    next();

  }
  catch(error){
    res.status(401).json('error')
  }
}