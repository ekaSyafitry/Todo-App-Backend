import express from 'express'
const router = express.Router();

import {getTodos, postTodos, deleteTodo, updateTodo, updateTodoComplete} from '../controllers/todo.js'
import { validateAuth, validatePayload } from '../midleware/auth.js';
import todos from '../midleware/schema.js';

	// console.log(midlewareSchema.getTodo.validate, 'masaaaaaaaaaaaa')
	// router.get('/alldata/:todoDate', getAllData)

	// router.get('/withoutAuth', validateAuth, getTodosNotAuth)

	router.post('/post', validateAuth, [validatePayload(todos)], postTodos)
	//getTodo	
	router.get('/:date',  validateAuth,  getTodos)

	router.delete('/delete/:todoId',validateAuth, deleteTodo)

	router.put('/update/:todoId', validateAuth, [validatePayload(todos)], updateTodo)

	router.get('/updateComplete/:todoId/:value', validateAuth, updateTodoComplete)


	export default router




