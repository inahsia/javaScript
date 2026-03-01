import express from 'express'
import {userController} from '../controller/userController.js'
import {productController} from '../controller/product.controller.js'
import { orderRouter } from  '../controller/order.controller.js'
const router=express.Router();

//routes
router.use('/user',userController);
router.use('/product',productController);
router.use('/order',orderRouter);
export default router;