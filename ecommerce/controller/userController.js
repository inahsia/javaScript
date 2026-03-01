import express from 'express'
import * as userService from '../service/user.service.js'
const router=express.Router();

router.post('/register',async(req,res,next)=>{

  try{
    const user= await userService.createUser(req.body);
    res.status(201).json({
      success:true,
      data:user
    });
  }
  catch(error){
    next(error);
  }
})
router.post('/login',async(req,res,next)=>{

  try{
    const user= await userService.loginUser(req.body);
    res.status(201).json({
      success:true,
      data:user
    });
  }
  catch(error){
    next(error);
  }
})


export const userController=router;