const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        max: 255
    },
    password: {
        type: String,
        min: 6
    },
    score: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)