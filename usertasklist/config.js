import { Console } from 'console';
import mongoose from 'mongoose'
export const connectDb=async()=>{
  mongoose.connect(process.env.MONGO_URL);
  console.log("connected Db")
}