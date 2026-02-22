import mongoose from 'mongoose'
export const connectDB=async()=>{
  await mongoose.connect("mongodb+srv://admin:admin@cluster0.a9dvost.mongodb.net/?appName=Cluster0");
  console.log("Mongo connected");
}