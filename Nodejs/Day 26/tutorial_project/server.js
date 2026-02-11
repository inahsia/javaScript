import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import pino from 'pino'
import contactRoutes from "./routes/contactRoutes.js"
import contactNumberRoutes from "./routes/contactNumberRoutes.js"
import errorHandler from './middleware/errorhandler.js'

const logger=pino();
dotenv.config()
const app=express()

const port=process.env.PORT ||8000


//now we are using middleware which  use
app.use(express.json());


app.use(errorHandler);


app.use(morgan('combined'));
app.use("/api/contacts",contactRoutes);
app.use("/number",contactNumberRoutes);

app.listen(port,()=>{
  console.log(`this is a running port ${port}`);
})




