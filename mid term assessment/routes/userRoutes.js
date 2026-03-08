import express from 'express'
import {userController} from '../controllers/userConroller.js'
const router=express.Router();

router.use('/',userController);


export const routes=router;