const express = require('express');
const router = express.Router();
import {getUser, login, postUser} from '../controllers/user'
import { validateAuth } from '../midleware/auth';


router.post('/register', postUser)

router.post('/login', login)

router.get('/getUser', validateAuth, getUser)

export default router