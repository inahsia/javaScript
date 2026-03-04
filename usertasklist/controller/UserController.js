import express from 'express'
import * as usertasks from '../service/userServices.js'
const router=express.Router();
import {authMiddleware} from '../middleware/auth.js'

router.post('/register',async(req,res)=>{
  try{
  const user=await usertasks.register(req.body);
  res.status(201).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})


router.post('/login',async(req,res)=>{
  try{
  const user=await usertasks.login(req.body);
  res.status(201).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})

router.post('/:id',authMiddleware,async(req,res)=>{
  try{
  const user=await usertasks.addtask(req.body,req.params.id);
  res.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})

router.get('/:id',authMiddleware,async(req,res)=>{
  try{
  const user=await usertasks.gettask(req.params.id);
  res.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})

router.get('/',authMiddleware,async(req,res)=>{
  try{
  const user=await usertasks.getAllTask();
  res.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})

router.put('/:id',authMiddleware,async(req,res)=>{
  try{
  const user=await usertasks.updateId(req.params.id,req.body);
  res.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})

router.delete('/:id',authMiddleware,async(req,res)=>{
  try{
  const user=await usertasks.deleteValue(req.params.id);
  res.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
  }
})




export const UserController=router;