import mongoose from 'mongoose'

export const connectDb=async()=>{
  const url=process.env.MONGO_URL
  mongoose.connect(url);
  console.log("db is connected");
}