import express from 'express';
import {z} from 'zod';
const app=express();
app.use(express.json());

//noow for validation i want to make schema 
const registerSchema=z.object({
  name:z.string().min(3,"3+ length should be there"),
  email:z.string().email("invalid email"),
  password:z.string().min(6,"password must be 6+"),
  age:z.number().min(18,"must be 18+")
});

//now login schema we will make 
const loginSchema=z.object({
  email:z.string().email(),
  password:z.string().min(1,"password is required")
});

app.post("/register",(req,res)=>{
  try{
    const data=registerSchema.parse(req.body);
    res.json({
      message:"user registered",
      user:data
    });

  }
  catch(err){
    res.status(400).json({
      error:err.errors
    })
  }
});

app.post("/login",(req,res)=>{
  try{
    const data=loginSchema.parse(req.body);
    res.json({
      message:"login successful",
      user:data
    })
  }
  catch(err){
    res.status(400).json({
      error:err.erros

    })
  }
});

app.listen(3000,()=>{
  console.log("server running on port 3000");
})