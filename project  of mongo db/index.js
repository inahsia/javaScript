import express from 'express'
import mongoose from 'mongoose'
// import {userRoute} from './routes/userRoutes.js'
import {connectMongoDB} from './Models/db.js'
import dotenv from 'dotenv'


dotenv.config()
const port=process.env.PORT ||3000;
const app=express();
connectMongoDB(process.env.Mongo_db).then(()=>{
  console.log(`mongodb connected`);
})
// app.use('/',userRoute);


app.listen(port,()=>{
  console.log(`this is port ${port}`);
})

                 
    
const str1="i love anime".split("");
str1.forEach((e,i)=>{
  


}


)