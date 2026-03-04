import express from 'express'
import {UserController} from '../controller/UserController.js'
const router=express.Router();

router.use('/',UserController);

export default router;