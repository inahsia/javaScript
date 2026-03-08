import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {routes} from './routes/userRoutes.js'
import {connectDb} from './config/connection.js'

dotenv.config();
connectDb();
const PORT=process.env.PORT;
const app=express()
app.use(morgan("dev"));
app.use(express.json());


app.use("/api",routes);


app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`);
})
