import express from "express";
import { connectDB } from "./db.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());

await connectDB();

app.use("/api",orderRoutes);

app.use((err,req,res,next)=>{
  res.status(500).json({error:err.message});
});

app.listen(3000,()=>{
  console.log("Server running on 3000");
});