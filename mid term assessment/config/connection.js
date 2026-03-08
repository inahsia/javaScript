import mongoose from "mongoose";

const url=process.env.MONG_URL;
export const connectDb=async()=>{
  mongoose.connect(process.env.MONG_URL);
  console.log('the database is connected');
}