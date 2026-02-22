import express from 'express'
import {placeOrderService} from '../controller/order.js'

const router=express.Router();
router.post("/order",placeOrderService);
export default router;