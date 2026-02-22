import mongoose from "mongoose";

export const connectMongoDb = async (url) => {
  try {

    const conn = await mongoose.connect(url);

    console.log("MongoDB Connected:", conn.connection.host);

    return conn;

  } catch (err) {

    console.error("MongoDB connection failed:", err.message);
    process.exit(1);

  }
};