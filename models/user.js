const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 100
    },
    lastname:{
        type: String,
        maxlength: 100,
        default: ""
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        required: true,
        minlength:8,
        select: false
    }
})

module.exports = mongoose.model('User', userSchema);