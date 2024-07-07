const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.registerUser = async (req,res)=>{
    const {name, username, email, password, bio} = req.body

    try{
        let user = await User.findOne({email})

        if(user){
            throw new Error('User already exists')
        }

        //random value addition before hashing
        const salt = await bcrypt.genSalt(10)
        // hashing password 
        const hashedPass = await bcrypt.hash(password, salt);

        user = new User({
            name,
            username,
            email,
            password: hashedPass,
            bio
        })

        await user.save()

        //payload object contains data to be encoded in jwt
        const payload = {user: {id: user.id}}
        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '1h'});

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token})
    }catch(err){
        res.status(400).json({
            success:false,
            message: err.message
        })
    }
}

exports.loginUser = async (req,res)=>{
    const {username, password} = req.body

    try{
        const user = await User.findOne({username})

        if(!user){
            throw new Error("User doesn't exist")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            throw new Error('Invalid credentials')
        }

        const payload = {user: {id: user.id}}
        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '1h'});
        res.cookie('token', token, { httpOnly: true })

        res.status(201).json({
            success: true,
            message: 'User logged in successfully',
            token})
    }catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}