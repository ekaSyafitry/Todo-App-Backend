import express from 'express'
const router = express.Router();
import {getUser, login, postUser} from '../controllers/user.js'
import { validateAuth, validatePayload } from '../midleware/auth.js';
import { user, loginUser } from '../midleware/schema.js';


router.post('/register', [validatePayload(user)], postUser)

router.post('/login', [validatePayload(loginUser)], login)

router.get('/getUser', validateAuth, getUser)

export default router