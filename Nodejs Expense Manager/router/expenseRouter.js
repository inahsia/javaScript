import express from 'express'
import {addTask,getTask,getExpenses,updateTask,deleteTask} from '../controller/routesController.js'
const router=express.Router();


addTask(router);
getExpenses(router);
updateTask(router);
getTask(router);
deleteTask(router);


export default router;