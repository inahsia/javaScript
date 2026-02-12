import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import pino from 'pino'
import toDoroute from './routes/toDoroute.js'
const app=express();
dotenv.config();
const port =process.env.PORT || 3000;
const logger=pino();
app.use(express.json())
app.use(morgan('combined'));

app.use('/',toDoroute)





app.listen(port,()=>{
  console.log(`This is port ${port}`);
})


