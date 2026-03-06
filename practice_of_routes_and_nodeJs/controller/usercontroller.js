import express from 'express'
import * as dataOperations from  '../services/userServices.js'
const router=express.Router();
import { generateToken, middleware } from '../middleware/auth.js';

router.post('/register',async(req,res)=>{
  try{
    const user=await dataOperations.register(req.body);
    res.status(201).json({message:"registered successfully"});
  }
  catch(error){
    res.status(401).json({message:"failed to register"});
  }

})

router.post('/login',async(req,res)=>{
  try{
    const user=await dataOperations.login(req.body);
    res.status(200).json(user)
  }
  catch(error){
  res.status(401).json({message:"failed to login"});
}
}

)

router.get('/task',middleware,async(req,res)=>{
  try{
     console.log("decoded user:", req.user);
    const user=await dataOperations.getTaskofUser(req.user.userId);
    res.status(200).json(user);
  }
  catch(error){
    res.status(401).json({message:"failed to get"})
  }
})


router.post('/task',middleware,async(req,res)=>{
  try{
    const user=await dataOperations.insertTask(req.body,req.user.userId);
    res.status(401).json(user);
  }
  catch(error){
    res.status(401).json(user)
  }
})

router.put('/task/:id',middleware,async(req,res)=>{
  try{

   const user=await dataOperations.updateTheTask(req.params.id,req.body);
    res.status(200).json(user);
  }
  catch(error){
    res.status(401).json(user)
  }

})

router.delete('/task/:id',middleware,async(req,res)=>{
  try{

   const user=await dataOperations.deleteTheTask(req.params.id);
    res.status(200).json(user);
  }
  catch(error){
    res.status(401).json(user)
  }
  
})

export const userController=router;