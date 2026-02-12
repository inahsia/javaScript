import express from 'express'

import {bookscatalog,fetchByIdBooks,addBooks,deleteTheItems} from '../controller/books.controller.js'

const router=express.Router();



bookscatalog(router);
fetchByIdBooks(router);
addBooks(router);
deleteTheItems(router);



export default router;