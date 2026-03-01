import morgan from 'morgan'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/user.route.js';
import {connectDb}from './config/db.js'
import { errorHandler } from './middleware/error.middleware.js';
connectDb();
const app=express();
dotenv.config();
const PORT=process.env.PORT;
app.use(morgan("dev"));
app.use(express.json());


app.use("/api",router);
app.use(errorHandler)

app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`)
})