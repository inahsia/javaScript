import { Router } from "express";
import * as userService from "../service/userService.js";
import { asyncHandler } from "../middleware/error.js";

const router = Router();


router.post('/',asyncHandler(async (req,res,next)=>{
  const user=await userService.createUser(req.body);
  res.status(201).json(user);
}));

router.get('/:id',asyncHandler(async(req,res,next)=>{
  const user=await userService.getUserById(req.params.id);
  res.status(200).json(user);
}))

router.get('/',asyncHandler(async(req,res,next)=>{
  const user=await userService.getUsers(req.query);
  res.status(200).json(user);

}))

router.put('/:id',asyncHandler(async(req,res,next)=>{
  const user=await userService.updateValueById(req.params.id,req.body);
  res.status(200).json(user);
}))


router.delete('/:id',(async(req,res,next)=>{
  try{
        const user=await userService.deleteById(req.params.id);
        res.json({ message: "deleted" });
  }
  catch(err){
      next(err)
  }
}))

export const userController = router;
