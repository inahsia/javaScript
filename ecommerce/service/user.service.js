import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const generateToken=(user)=>{
  return jwt.sign(
    {
      id:user._id,
      role:user.role},
      process.env.secret,
      {expiresIn:"1d"}
    
  )
}

//register
export const createUser=async(body)=>{
  const {name,email,password,role}=body;

  const existingUser=await User.findOne({email});
  if(existingUser){
    throw new Error("User already exists");
  }
  const hashedPassword=await bcrypt.hash(password,10);
  const user=await User.create({
    name,
    email,
    password:hashedPassword,
    role
  });
  const token=generateToken(user)
  return {user,token};
}

export const loginUser=async(body)=>{
  const {email,password}=body;

  const user=await User.findOne({email});
  if(!user){
    throw new Error("User already exists");
  }
  const isMatch=bcrypt.compare(password,user.password);
  if(!isMatch){
    throw new Error("invalid credentials");
  }
  const token=generateToken(user);
  return {
    user,token
  };
};