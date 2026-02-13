import express from 'express'
import {getTodos,getTodosById,createTodo,updateTodo,deleteTodo} from '../controller/toDo.controller.js';

const router=express.Router()

getTodos(router);
getTodosById(router);
createTodo(router);
updateTodo(router);
deleteTodo(router);

export default router

