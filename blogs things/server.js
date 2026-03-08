import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import {routes} from './routes/userRoutes.js';
import {connectDb} from './connection.js'
dotenv.config();

const PORT=process.env.PORT;
const app=express();
app.use(express.json());
connectDb();
app.use(morgan("dev"));


app.use('/api',routes);

app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`);
})
