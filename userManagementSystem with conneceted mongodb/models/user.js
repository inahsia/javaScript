import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  role:String
},{timestamps:true});

export const user=mongoose.model("user",userSchema);
