import express from 'express'
import bcrypt from 'bcrypt'
import {User} from '../model/user.js'
import {Task} from '../model/blogs.js'
import { generateToken } from '../middleware/auth.js'
export const register=async(body)=>{
  try{
  const {name,email,password}=body;
  if(!name || !email || !password){
    throw new Error("bro please enter full credentials");
  }

  const alreadyExists=await User.findOne({email});
  if(alreadyExists){
    throw new Error("already exists");
  }
  const hashedPassword=await bcrypt.hash(password,10);
  const user=await User.create({
    name,
    password:hashedPassword,
    email
  })
  return user;
}
catch(error){
    console.log(error.message);
    throw error;
}
}

export const login=async(body)=>{
  try{
    const {email,password}=body;
    if(!email || !password){
      return new Error("bro please enter full credentials ");
    }
    const user=await User.findOne({email});
    const verify=await bcrypt.compare(password,user.password);
    if(!verify){
      return new Error("wrong pw");
    }
    const token=generateToken(user.email,user._id);
    return {token,user};

  }
  catch(error){
    console.log(error.message);
  }
}

export const addBlog=async(body,userId)=>{
  const {title,content}=body;
  const user=await Task.create(
    {
      title,
      content,
      userId  
    }
  )
  return user;

}

export const getBlog=async(userId)=>{
  try{
  const user=await Task.find({userId});
  return user;
  }
  catch(error){
    return new Error("not able to fetch");
  }

}

export const updateBlog=async(body,id)=>{
  const {title,content}=body;
  const user=await Task.findByIdAndUpdate(id,{
    title,
    content
  },
{ returnDocument: "after" }
)
return user;
}

export const deleteBlog=async(id)=>{
  const user=await Task.findByIdAndDelete(id);
  return user;
}


