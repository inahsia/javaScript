import express from 'express'
import * as data from '../services/userServices.js'
import { middleware } from '../middleware/auth.js';
const router=express.Router();

router.post('/auth/register',async(req,res)=>
{
  try{
    const user=await data.register(req.body);
     res.status(201).json(user);
  }
  catch(error){
    res.status(401).json({message:"cant register"});
  }
}
);

router.post('/auth/login',async(req,res)=>{
  try{
    const user=await data.login(req.body);
    res.status(200).json(user);
  }
  catch(error){
  res.status(401).json({message:"cant register"});
  }
})


router.post('/task',middleware,async(req,res)=>{
  try{
    const user=await data.addTask(req.body,req.user.userId);
    res.status(201).json(user);
  }
  catch(error){
    res.status(401).json("error");
  }
})

router.get('/task',middleware,async(req,res)=>{
  try{
    const user=await data.getTaskbyId(req.body,req.user.userId);
    res.status(201).json(user);
  }
  catch(error){
    res.status(401).json("error");
  }
})

router.put('/task/:id',middleware,async(req,res)=>{
  try{
    const user=await data.updateTask(req.params.id);
    res.status(200).json(user);
  }
  catch(error){
    res.status(401).json("error");
  }
})

router.delete('/task/:id',middleware,async(req,res)=>{
  try{
    const user=await data.deleteTask(req.params.id);
    res.status(200).json(user);
  }
  catch(error){
    res.status(401).json("error");
  }
})

export const userController=router;