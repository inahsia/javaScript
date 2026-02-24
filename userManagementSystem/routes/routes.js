import {userController} from '../controller/userController.js'
import express from 'express'

const router=express.Router();

router.use('/',  userController);




export default router;
