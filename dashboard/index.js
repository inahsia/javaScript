import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import { userRoute } from './routes/user.Routes.js';
import { connectDb } from './config/db.js';
dotenv.config()
const app=express();
app.use(express.json())
connectDb();
app.use(morgan("dev"));
const PORT=process.env.PORT;

app.use("/",userRoute);


app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`);
})
