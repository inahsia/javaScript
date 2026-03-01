import express from 'express'
import * as productService from '../service/product.service.js'
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import {createProductSchema } from '../validation/product.validation.js'
const router=express.Router();

router.post('/',protect,authorize("admin"),validate(createProductSchema),async(req,res,next)=>{

const user=await productService.createProduct(req.body);
res.status(201).json({
  "message":"created",
  user
})
})

router.get('/',async(req,res,next)=>{
  const { page, limit } = req.query;
  const user=await productService.readProduct(page,limit);
  console.log(user);
  res.status(200).json({
    user
  })

})

router.get('/:id',async(req,res,next)=>{
  const user=await productService.getByid(req.params.id);
  res.status(200).json({
  "message":"fetched by id",
  user
})

})

router.put("/:id",async(req,res,next)=>{
  const user=await productService.updatebyId(req.params.id,req.body);
  res.status(204).json({message:"done"});
})

router.delete('/:id',async(req,res,next)=>{
    const user=await productService.deletebyId(req.params.id);
  res.status(204).json({message:"done"});
})

export const productController=router;