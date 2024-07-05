const express = require('express')
const conncetToDb = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')
const errorHandler = require('./middleware/errorHandler.js')
const cors = require('cors')
require('dotenv').config()

const app = express()

conncetToDb()

app.use(express.json())
//to prevent making request to diff domain which is not serving 
app.use(cors({
    origin: process.env.CLIENT_URL, // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 204
}));
app.use(errorHandler)

app.use('/api/users', userRoutes)

module.exports = app