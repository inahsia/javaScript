import express from 'express'
const router=express.Router();
import {getContact,createContact,getContact_by_id,editContact_by_id,deleteContact} from '../controller/contactController.js'


router.route("/").get(getContact);
router.route("/").post(createContact);

router.route("/:id").get(getContact_by_id);


router.route("/:id").put(editContact_by_id);

router.route('/:id').delete(deleteContact);



// export default means:
//  “This is the main thing this file provides.”

export default router;