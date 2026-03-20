import morgan from 'morgan'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/user.route.js';
import webhookRouter from "./routes/webhook.routes.js";

import {connectDb}from './config/db.js'
import { errorHandler } from './middleware/error.middleware.js';
dotenv.config();
const app=express();
app.use("/webhook", webhookRouter);


const PORT=process.env.PORT;
app.use(morgan("dev"));

app.use(express.json());
connectDb();

app.use("/api",router);

app.get("/success", (req, res) => {
  res.send("Payment Successful ");
});

app.get("/cancel", (req, res) => {
  res.send("Payment Cancelled ");
});

app.use(errorHandler)

console.log("STRIPE KEY:", process.env.STRIPE_SECRET_KEY);
app.listen(PORT,()=>{
  console.log(`this is running on port ${PORT}`)
})