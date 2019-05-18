const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({


    title : String,
    des : String,
    content : String,


})

const postfile = mongoose.model('post' , postSchema)

module.exports = postfile