import express from 'express'
import {userController} from '../controller/usercontroller.js'
const router=express.Router();

router.use('/',userController);

export const routes=router;

