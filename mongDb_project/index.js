import express from 'express'
import { connectMongoDb } from './connections.js'
import dotenv from 'dotenv'
import {userRoute} from './routes/user.routes.js'
import morgan from 'morgan'

const app=express()
dotenv.config()
app.use(express.json());
app.use(morgan('dev'));
const PORT=process.env.PORT || 3000

connectMongoDb(process.env.MONGODB_URL).then(()=>{
  console.log(`MongoDb connected`);
})

app.use('/',userRoute)
app.listen(PORT,()=>{
  console.log(`This is port ${PORT}`);
})
