import express from 'express'
import dotenv from 'dotenv'
import { title } from 'process';
import fs from 'node:fs'
import morgan from 'morgan'
import bookrouter from './routes/books.routes.js';
import { fileMiddleware,customMiddlerware } from './middlewares/logger.js';
dotenv.config();
const port=process.env.PORT || 3000;
const app=express();
app.use(morgan('dev'))
app.use(fileMiddleware);
app.use(customMiddlerware);
app.use(express.json());

// app.use(function middleware_A(req,res,next){
//   console.log("yesss this is middleware man")
//   next();
// });

//IMPORTANT TO UNDERSTAND
// GET/POST ,ANY REQUEST
// app.use('/books',(req,res,next)=>{next()})
// app.use(function middleware_B(req,res,next){
//   console.log("hello bro whats up man");
//   next();
// })

app.use('/books',bookrouter);


app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})