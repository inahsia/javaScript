import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const url=process.env.MONG_URL


export const connectDb=async()=>{
  try{
    await mongoose.connect(url);
    console.log("db is connected ");

  }
  catch(error){
    console.log('db is not connected');
  }
}