import express from 'express'
import bcrypt from 'bcryptjs'
import {User} from '../model/user.js'
import {Task} from '../model/task.js'
import {generateToken} from '../middleware/auth.js'
export const register=async(body)=>{
  try{
  const {name,email,password}=body;
  if (!name || !email || !password){
    throw new Error("add name,email and password");
  }
  const existingUser=await User.findOne({email});
  if(existingUser){
    throw new Error("already exists");
  }
  const hashpassword=await bcrypt.hash(password,10);
  const user=await User.create({
    name,
    password:hashpassword,
    email
  })
  return user;
  }
  catch(error){
    console.log(error.message);
  }
}

export const login =async(body)=>{
   try{
  const {email,password}=body;
  if (!email || !password){
    throw new Error("add name and password");
  }
  const exists=await User.findOne({email});
  if(!exists){
    throw new Error("need to register");
  }
  const verifypassword=await bcrypt.compare(password, exists.password);

    if (!verifypassword) {
    throw new Error("Invalid password");
  }
   const token= generateToken(email);


  return {
    exists,token};
  }
  catch(error){
    console.error(error.message);
  }
}

export const addtask=async(body,userId)=>{
  const {title,description,completed,user}=body;
  if(!title || !description){
    throw new Error("please enter all fields");
  }
  const value=await Task.create({
    title,description,completed,user:userId

  })
return value;
}

export const gettask=async(id)=>{
 
  const user=await Task.findById(id);
  return user;
}

export const getAllTask=async()=>{
 
  const user=await Task.find();
  return user;
}

export const updateId=async(id,body)=>{
 const { title, description, completed } = body;

  const task = await Task.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true } 
  );

  return task;
}

export const deleteValue=async(id)=>{

  const user=await Task.findByIdAndDelete(id
  );
  return user;
}


