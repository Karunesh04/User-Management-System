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
app.use(cors())
app.use(errorHandler)

app.use('/users', userRoutes)

module.exports = app