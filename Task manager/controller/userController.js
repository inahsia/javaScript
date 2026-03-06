import express from 'express'
import bcrypt from 'bcrypt'
import * as data from '../service/admin.Server.js'
import { auth } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/authorize.js';
const router=express.Router();
router.post('/register',async(req,res)=>{
  try{
  const user=await data.register(req.body);
  res.status(201).json(user);
  }
  catch(error){
   console.log(error.message);
   res.status(400).json({"message":error.message});
  }
});

router.post('/login',async(req,res)=>{
  try{
  const user=await data.login(req.body);
  res.status(200).json(user)
  }
  catch(error){
    res.status(400).json({message:error});
  }
});

//admin 
router.post('/admin',auth,authorizeRoles("admin"),async(req,res)=>{
  try{
    const user=await data.createTask(req.body);
    res.status(201).json(user);
  }
  catch(error){
    res.status(400).json(error.message);
  }
})

router.put('/admin/:id',async(req,res)=>{
  try{
    const user=await data.editTask(req.params.id,req.body);
    res.status(201).json(user);
  }
  catch(error){
    res.status(400).json(error.message);
  }
})

router.delete('/admin/:id',async(req,res)=>{
  try{
    const user=await data.deleteTask(req.params.id);
    res.status(201).json(user);
  }
  catch(error){
    res.status(400).json(error.message);
  }
})



export const UserController= router;