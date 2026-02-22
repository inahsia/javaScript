import { counterFn, database } from "../stores.js";
import { AppError, asyncHandler } from "../middleware/error.js";
import {user} from '../models/user.js'
// import { User } from "../../mongdb/practice.js";

export const createUser=async(body)=>{
 
return await user.create(body);

};


export const getUserById=async(id)=>{
const user=await user.findById(id);
if (!id) throw new AppError("User not found");
return user;
}

export const getUsers=async(query)=>{
  
 
}


export const updateValueById=async(id,body)=>{

  const user=await user.findByIdAndUpdate(
    id,body,{new:true}
  )
  if (!user) throw new AppError("User not found",404)

return user;
}

export const deleteById = async (id) => {

  const user=await user.findByIdAndDelete(id);
  if (!user) throw new AppError("User not found",404);
  return true;
};











