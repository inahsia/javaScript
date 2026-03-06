import express from 'express'
import {userController} from '../controller/userController.js'
import { adminController} from '../controller/adminController.js'
const router=express.Router();

router.use('/user',userController);
router.use('/admin',adminController);
  
export const userRoute=router;