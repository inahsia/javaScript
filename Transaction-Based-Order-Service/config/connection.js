import mongoose from 'mongoose'
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.a9dvost.mongodb.net/?appName=Cluster0");

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};