import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './routes/routes.js'
import {errorHandler} from './middleware/error.js'
import {notFound} from './middleware/error.js'
dotenv.config();
const port=process.env.port || 3000
const app=express();
app.use(morgan('combined'))
app.use(express.json());


app.use('/',router);


app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
  console.log(`This is running port ${port}`)
})








