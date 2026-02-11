import express from 'express'
import { books } from '../book.js';
import {bookscatalog,fetch_by_id_books,addBooks,delete_the_items} from '../controller/books.controller.js'

const router=express.Router();


router.route('/').get(bookscatalog);

router.route('/:id').get(fetch_by_id_books)

router.route('/').post(addBooks);

router.route('/:id').delete(delete_the_items);



export default router;