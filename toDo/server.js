import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import pino from 'pino'
import toDoroute from './routes/toDoroute.js'
import {errorHandler,notFound} from './middleware/errors.js'
const app=express();
dotenv.config();
const port =process.env.PORT || 3000;
const logger=pino();
app.use(express.json())
app.use(morgan('combined'));

app.use('/',toDoroute)

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
  console.log(`This is port ${port}`);
})


