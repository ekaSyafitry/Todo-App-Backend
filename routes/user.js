import express from 'express'
const router = express.Router();
import {getUser, login, postUser} from '../controllers/user.js'
import { validateAuth } from '../midleware/auth.js';


router.post('/register', postUser)

router.post('/login', login)

router.get('/getUser', validateAuth, getUser)

export default router