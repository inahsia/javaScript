import pino from 'pino'
import morgan from 'morgan'
import express from 'express'
import dotenv from 'dotenv'
import expenseRouter from  './router/expenseRouter.js'
const app=express();

const logger=pino();
app.use(express.json());
app.use(morgan("combined"));
dotenv.config();
const port =process.env.PORT;


app.use('/',expenseRouter);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(400).json({ error: err.message });
});


app.listen(port,()=>{
  console.log(`this is port ${port}`);
})

