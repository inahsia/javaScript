import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import morgan from 'morgan'
import {routes} from './routes/userRoutes.js'
import { connectDb } from './connection.js'
dotenv.config();
connectDb()
const app=express();
const PORT=process.env.PORT;
app.use(express.json());

app.use(morgan("dev"));

app.use('/',routes);

app.listen(PORT,'0.0.0.0',()=>{
  console.log(`this port is running on ${PORT}`);
})

