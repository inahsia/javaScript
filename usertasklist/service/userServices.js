import express from 'express'
import bcrypt from 'bcryptjs'
import {User} from '../model/user.js'
import {Task} from '../model/task.js'
import {generateToken} from '../middleware/auth.js'

export const register = async (body) => {
  try {
    const { name, email, password} = body;
    if (!name || !email || !password) {
      throw new Error("Name, email and password are required");
    }

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      name,
      email,
      password: hashedPassword
  
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const login = async (body) => {
  try {
    const { email, password } = body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not registered");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = generateToken(user.email,user._id);

    return {
      user,
      token,
    };
  } catch (error) {
    throw error;
  }
};

export const addtask=async(body,userId)=>{
  try{
  const {title,description,completed,pending}=body;        //user}
  if(!title || !description){
    throw new Error("please enter all fields");
  }
  const value=await Task.create({
    title,description,completed,pending,
    user: userId 

  })
return value;
  }
  catch(error){
    console.error(error.message);
  }
}


// export const addtask=async(body,userId)=>{
//   try{
//   const {title,description,completed,pending}=body;        //user}
//   if(!title || !description){
//     throw new Error("please enter all fields");
//   }
//   const value=await Task.create({
//     title,description,completed,pending,user:userId

//   })
// return value;
//   }
//   catch(error){
//     console.error(error.message);
//   }
// }

export const gettask=async(id)=>{
 
  const user=await Task.findById(id);
  return user;
}

export const getAllTask = async (userId) => {
  const tasks = await Task.find({ user: userId })
  return tasks
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

  const user=await Task.findByIdAndDelete(id);
  return user;
}


