import express from 'express'
import dotenv from 'dotenv'
import {orderRouter} from './routes/orderRoutes.js'
import {connectDB} from './config/connection.js'

dotenv.config();
const app=express();
app.use((express.json()));

//connection database
connectDB()
app.use('/api',orderRouter);

const port=5000;

app.listen(port,()=>{
  console.log(`server running on port ${port}`)
})