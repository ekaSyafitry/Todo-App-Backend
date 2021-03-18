import mongoose from 'mongoose'
var Schema   = mongoose.Schema;

const postSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        index: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    note : {
        type: String,
        default: ""
    },
    complete : {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('TodoList', postSchema);