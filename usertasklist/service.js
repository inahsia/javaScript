import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import {connectDb} from './config.js'
dotenv.config();
connectDb()
const app=express();
app.use(morgan("dev"));
app.use(express.json());
const PORT=process.env.PORT;

app.use('/api',router);

app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`);
})