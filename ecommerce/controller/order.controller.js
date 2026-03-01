import mongoose from 'mongoose'
import express from 'express'
import * as orderPlaced from '../service/order.service.js';
const router=express.Router();

router.post('/',async(req,res,next)=>{
   try {
    const order = await orderPlaced.placeOrder(
      req.user._id,
      req.body.items
    );

    res.status(201).json({
      success: true,
      data: order
    });

  } catch (error) {
    next(error);
  }

})

export const orderRouter=router;