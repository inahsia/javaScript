import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {UserDb} from '../model/user.js'
import {Task} from '../model/user.js'
import {generateToken} from '../middleware/auth.js'
import {auth} from '../middleware/auth.js'
import {authorizeRoles} from '../middleware/authorize.js'
export const register=async(body)=>{
  try{
  const {name,email,password,role}=body;
  const existsingUser=await UserDb.findOne({email});
  if(existsingUser){
    throw new Error('user already exists');
  }
  //hashing of password
  const hashPassword=await bcrypt.hash(password,10);
  const user=await UserDb.create({
    name,
    email,
    password:hashPassword,
    role
  })
  return {id: user._id,
      name: user.name,
      email: user.email,
      role: user.role}
  }
  catch(error){
    throw error;
  }

}

export const login=async(body)=>{
   const {email,password,role}=body;
   const user=await UserDb.findOne({email});
   if(!user){
    throw new Error("User does not exists");
   }
   const checkpassword=await bcrypt.compare(password,user.password);
   if(!checkpassword){
    throw new Error("wrong credentials");
   }
   const token=generateToken(user);
   return {user,token}

}


export const createTask=async(body)=>{
  const {title, description, email }=body;
  const user=await UserDb.findOne({email});
    if (!user) {
    throw new Error ("User not found") ;
  }
  const task=await Task.create({
    title,description,
    assignedTo:user._id,
    assignedBy:user._id

  });
  return task;
}

export const editTask=async(id,body)=>{
  const {title, description, email }=body;
   const user=await Task.findByIdAndUpdate(id,{ title, description },
    { new: true, runValidators: true });
   
    if (!user) {
    throw new Error ("User not found") ;
  }
return user;
}

export const deleteTask=async(id)=>{
  
   const user=await Task.findByIdAndDelete(id);
   
    if (!user) {
    throw new Error ("User not found") ;
  }
return user;
}

