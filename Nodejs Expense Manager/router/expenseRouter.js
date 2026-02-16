import express from 'express'
// import {addTask,getTask,getExpenses,updateTask,deleteTask} from '../controller/routesController.js'
import { userController } from '../controller/routesController.js';
const router=express.Router();


router.use('/',userController)


export default router;;