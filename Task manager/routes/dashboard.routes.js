import express from 'express'
import {UserController} from '../controller/userController.js';
const router=express.Router();

router.use('/user',UserController);


export default router;