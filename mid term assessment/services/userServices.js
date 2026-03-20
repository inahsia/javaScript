import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { User } from '../models/user.js';
import {Task} from '../models/task.js'
import { middleware,generateToken } from '../middleware/auth.js';

export const register=async(body)=>{
  try{
  const {name,email,password}=body;
  if(!name || !email || !password){
    throw new Error("please fill complete credentials");
  }
  const existsingUser=await User.findOne({email});
  if(existsingUser){
    throw new Error('the user already exists');
  }
  const hashedPassword=await bcrypt.hash(password,10);

  const user=await User.create({
    name,
    email,
    password:hashedPassword
  })
  return user
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
      throw new Error("please enter all the credentials");
    }
    const user=await User.findOne({email});
    const verify=await bcrypt.compare(password,user.password);
    if(!verify){
      throw new Error("wrong password");
    }
    const token=generateToken(user.email,user._id);
    return {user,token};
  }
  catch(error){
    console.log(error.message);
    throw error;
  }
}

export const addTask=async(body,userId)=>{
  try{
  const {title,description,status}=body;
  if(!title || !description ||!status){
    throw new Error("there is some error ");
  }
  const task=await Task.create(
    {
      title,
      description,
      status,
      userId
    }
  )
  }

  catch(error){
    console.log(error.message);
    throw error;
  }
}
export const getTaskbyId=async(userId)=>{
  try{
    const user=await Task.find({userId});
    return user;
  }
  catch(error){
    console.log(error.message);
    throw error;
  }
}

export const updateTask=async(body,id)=>{
  try{
    const {title,description,status}=body;
    const user=await Task.findByIdAndUpdate(id,{
      title,
      description,
      status
    },
  {new:true});
  return user
  }
  catch(error){
    console.log(error.message);
    throw error;
  }
}

export const deleteTask=async(id)=>{
  try{
    const user=await Task.findByIdAndDelete(id);
    return user;
  }
  catch(error){
    console.log(error.message);
    throw error;
  }
}