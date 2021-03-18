import express from 'express'
const router = express.Router();

import {getTodos, postTodos, deleteTodo, updateTodo, updateTodoComplete} from '../controllers/todo.js'
import { validateAuth } from '../midleware/auth.js';

	router.post('/post', validateAuth, postTodos)
		
	router.get('/:todoDate', validateAuth, getTodos)

	router.delete('/delete/:todoId',validateAuth, deleteTodo)

	router.put('/update/:todoId', validateAuth, updateTodo)

	router.get('/updateComplete/:todoId/:value', validateAuth, updateTodoComplete)

	export default router




