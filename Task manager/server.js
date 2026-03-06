import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './routes/dashboard.routes.js'
import { connectDb } from './loader/connection.js'
connectDb();
const app=express()
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();
const PORT=process.env.PORT;

app.use('/api',router);

app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`);
})



