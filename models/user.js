//Requiring module for MongoDB
const mongoose = require('mongoose')

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//Creating model with schema and exporting the model
const user = mongoose.model('User', userSchema)
module.exports = user