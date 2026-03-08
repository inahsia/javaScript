import express from 'express'
import mongoose from 'mongoose'
import {userController} from '../controllers/userController.js'
const router=express.Router();

router.use('/', userController);

export const routes=router;