import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import {connectDb} from './config.js'
import cors from 'cors'
import {errorHandler} from './middleware/errorhandling.js'
dotenv.config();

connectDb()
const app=express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT;

app.use('/api',router);
app.use(errorHandler);
app.listen(PORT,'0.0.0.0',()=>{
  console.log(`this is running on port ${PORT}`);
})