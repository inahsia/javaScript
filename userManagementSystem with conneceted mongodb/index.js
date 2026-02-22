import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './routes/routes.js'
import {notFound} from './middleware/error.js'
import {connectMongoDb} from './connection.js'


dotenv.config();
await connectMongoDb(process.env.MONGODB_URL)
const port=process.env.port || 3000
const app=express();
app.use(morgan(":method :url :status :response-time ms"))
app.use(express.json());


app.use('/',router);


app.use(notFound);




app.listen(port,()=>{
  console.log(`This is running port ${port}`)
})








