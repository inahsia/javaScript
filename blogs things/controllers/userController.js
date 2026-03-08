import express from 'express'
import * as data from '../services/userServices.js'
import { generateToken ,middleware} from '../middleware/auth.js'

const router=express.Router();

router.post('/register',async(req,res)=>{
  try{
  const user=await data.register(req.body);
  console.log(user);
  res.status(201).json(user);
  }
  catch(error){
    res.status(400).json({ message: error.message });
  }

})

router.post('/login',async(req,res)=>{
  try{
    const user=await data.login(req.body);
   res.status(201).json(user);
  }
   catch(error){
    res.status(401).json("failed login");
  }
})

router.post('/task',middleware,async(req,res)=>{
  try{
   const user=await data.addBlog(req.body,req.user.userId)
    res.status(201).json(user);
  }
     catch(error){
    res.status(401).json("Not able add");
  }
})

router.get('/task',middleware,async(req,res)=>{
    try{
   const user=await data.getBlog(req.user.userId)
    res.status(201).json(user);
  }
     catch(error){
    res.status(401).json("not able to get task");
  }
})

router.put('/task/:id',middleware,async(req,res)=>{
  try{
   const user=await data.updateBlog(req.body,req.params.id);
   res.status(204).json(user);
  }
     catch(error){
    res.status(401).json("not able to get task");
  }
})

router.delete('/task/:id',middleware,async(req,res)=>{
  try{
   const user=await data.deleteBlog(req.params.id);
    res.status(201).json(user);
  }
     catch(error){
    res.status(401).json("not able to get task");
  }
})


export const  userController=router;