import express from 'express'
import * as createinfo from '../service/userService.js'
import {middleware} from '../middleware/auth.js'
const router=express.Router();

router.post("/register",async(req,res,next)=>{
  try{
  const user=await createinfo.register(req.body);
  res.status(201).json({message:"successfully entered"});
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
})

router.post("/login",async(req,res,next)=>{
  try{
    const user=await createinfo.login(req.body);
    res.status(200).json(
      user
    );
  }
  catch(error){
    res.status(400).json({
      message:error.message
    })
  }

})

router.get('/',middleware,async(req,res,next)=>{
  try{
    const user=await createinfo.getdate();
    res.status(200).json(user);

  }
  catch(error){
    res.status(400).json({
      message:error.message
    })
  }
})

router.get('/:id',middleware,async(req,res,next)=>{
  try{
    const user=await createinfo.getById(req.params.id);
    res.status(200).json(user);

  }
  catch(error){
    res.status(400).json(error);
  }
})


router.put('/:id',middleware,async(req,res,next)=>{
  try{
    const user=await createinfo.update(req.params.id,req.body);
    res.status(200).json(user);

  }
  catch(error){
    res.status(400).json(error);
  }
})

router.delete('/:id',middleware,async(req,res,next)=>{
  try{
    const user=await createinfo.deleted(req.params.id);
    res.status(200).json({message:"man this all is deleted"});
  }
  catch(error){
   res.status(400).json(error);
}
}
)



export const userController=router; 