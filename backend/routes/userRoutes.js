const express = require('express')
const {registerUser, loginUser} = require('../controllers/userController.js')
const signupDataValidate = require('../middleware/signupDataValidate.js')
const loginDataValidate = require('../middleware/loginDataValidate.js')

const router = express.Router()

router.post('/signup', signupDataValidate, registerUser)
router.post('/login', loginDataValidate, loginUser)

module.exports = router
