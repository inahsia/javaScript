import {createData,getDataById,getData,updateData,deleteData} from '../controller/controllerRoutes.js'
import {userController} from '../controller/userController.js'
import express from 'express'
const router=express.Router();

router.use('/',  userController)

createData(router);
getDataById(router);
getData(router);
updateData(router);
deleteData(router);

export default router;
