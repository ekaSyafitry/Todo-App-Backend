import mongoose from 'mongoose'
import express from 'express'
const app = express();

import bodyParser from 'body-parser'
import cors from 'cors'
import respond from 'express-respond'

//import routes
import route from './routes/index.js'

//Midleware
import dotenv from 'dotenv'
dotenv.config()
app.use(bodyParser.json());
app.use(respond);
app.use(cors());

route(app)


//Connect to DB
const connectUrl = process.env.CONNECT_URL;
mongoose.connect(`${connectUrl}`,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
}, () => console.log('connect to DB !!!'))

if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
}

app.listen(3030);