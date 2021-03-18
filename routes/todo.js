import express from 'express'
const router = express.Router();

import {getTodos, postTodos, deleteTodo, updateTodo, updateTodoComplete, getAllData, getTodosNotAuth} from '../controllers/todo.js'
import { validateAuth } from '../midleware/auth.js';
	
	router.get('/alldata', getAllData)

	router.get('/withoutAuth', validateAuth, getTodosNotAuth)

	router.post('/post', validateAuth, postTodos)
	//getTodo	
	router.get('/:todoDate',  validateAuth, getTodos)

	router.delete('/delete/:todoId',validateAuth, deleteTodo)

	router.put('/update/:todoId', validateAuth, updateTodo)

	router.get('/updateComplete/:todoId/:value', validateAuth, updateTodoComplete)


	export default router




