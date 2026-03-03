import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { tokengeneration } from '../middleware/auth.js'
import {User} from '../model/userCred.js'
import { AppError } from '../middleware/error.js'

export const  register=async(body)=>{
  const {name,email,password,role}=body;
  const exsistingmail=await User.findOne({email});
  if(exsistingmail){
   return next(new AppError("User already exists", 400));
  }
  const hashedPassword=await bcrypt.hash(password,10);
  const user=await User.create({
    name,
    email,
    password:hashedPassword,
    role
  })
  
  return user;
}

export const login =async(body)=>{
  const {email,password}=body;
  const user=await User.findOne({email});
  const verifyPassword=await bcrypt.compare(password,user.password);
  if(!verifyPassword){
    return next(new AppError("Wrong credentials", 400));
  }
  const token=await tokengeneration(user.email);
  return { user, token};
}

export const getdate=async()=>{
  try{
    const user=await User.find();
    if(!user){
      return next(new AppError("User does not exists"),400);
    }
    return user;

  }
  catch(error){
       throw new Error("some error");
  }
}

export const getById=async(id)=>{
  try{
    const {name,email,role}=id;
    const user=await User.findById(id);
    return user;
  }
  catch(error){
    throw new Error(("error "));
  }
}

export const update=async(id,body)=>{
  try{
    const updateData={};
    if(body.name) updateData.name=body.name;
    if (body.email) updateData.email = body.email;
    if (body.role) updateData.role = body.role;

    const {name,role,email}=body;
    const user=await User.findByIdAndUpdate(id,
      updateData,{ new: true } 
    );
     return user;

  }
  catch(error){
    return next(new AppError("Error in Updatation", 400));
  }
}

export const deleted=async(id)=>{
  try{
    const user=await User.findByIdAndDelete(id);
     return user;

  }
  catch(error){
    return next(new AppError("Error on deletion ", 400));
  }
}