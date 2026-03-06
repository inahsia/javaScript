import express from 'express'
import {User} from '../model/user.js'
import {Task} from '../model/task.js'
import bcrypt from 'bcrypt'
import { generateToken ,middleware} from '../middleware/auth.js'


export const register=async(body)=>{
  try{
  const {name,password,email}=body;

  if(!name || !password || !email){
    return new Error("please enter all credentials");
  }
  const existing=await User.findOne({email});
  if(existing){
      return new Erroe("already exists");
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
}
}

export const login=async(body)=>{
  try{
  const {password,email}=body;
  if( !password || !email){
    return new Error("please enter all credentials");
  }
  const user=await User.findOne({email})
  const verifyPassword=await bcrypt.compare(password,user.password);
  if(!verifyPassword){
    return new Error("password is wrong");
  }
  const token=generateToken(user.email,user._id);
  return {user,token};
}

catch(error){
    console.log(error.message);
}}

export const getTaskofUser=async(userId)=>{
  try{
 
  const task=await Task.find({ userId:userId});
  return task;
  }
  catch(error){
    console.log(error.message);
  }
}

export const insertTask=async(body,userId)=>{
  try{
    const {title,description,status}=body;
    const task=await Task.create({
      title,
      description,
      status,
      userId
    })
    return task
  }
  catch(error){
    console.log(error.message);
  }
}

export const updateTheTask=async(id,body)=>{
  try{
   const {title,description,status}=body;
   if(!id){
    return new Error("id does not exists");
   }
   const user=await Task.findByIdAndUpdate(id,
    {
      title,
      description,
      status
    }
    ,
    {new:true}
   )
return user
  }
  catch(error){
    console.log(error.message);
  }
}


export const deleteTheTask=async(id)=>{
  try{
   
   if(!id){
    return new Error("id does not exists");
   }
   const user=await Task.findByIdAndDelete(id)
   return user
  }
  catch(error){
    console.log(error.message);
  }
}

