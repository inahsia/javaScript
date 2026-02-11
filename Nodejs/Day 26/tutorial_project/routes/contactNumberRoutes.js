import express from 'express'
import {createContactNumber,get_Id_one_by_one,createNumber,deleteContact,editContacts} from '../controller/contactNumberController.js'
const router=express.Router();

router.route("/number").get(createContactNumber)

router.route("/number/:id").get(get_Id_one_by_one)

router.route("/number").post(createNumber)

router.route("/number/:id").delete(deleteContact)

router.route("/number/:id").put(editContacts)




export default router;