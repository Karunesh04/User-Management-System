const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        trim: true,
        maxLength: [30, 'Name must be less than 30 chars']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        trim: true,
        minLength: [6, 'Password must be of 6 chars']
    }
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)