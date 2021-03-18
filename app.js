const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
import respond from 'express-respond'

//import routes
import route from './routes/index'

//Midleware
require('dotenv').config()
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