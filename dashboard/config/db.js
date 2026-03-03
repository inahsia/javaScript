import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const url=process.env.MONG_URL;
export const connectDb=async()=>{
  await mongoose.connect(url);
  console.log("connected");
}