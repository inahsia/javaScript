import express from "express";
import { orderController } from "../controller/orderController.js";
const router = express.Router();

router.use("/order", orderController);

export const orderRouter=router;