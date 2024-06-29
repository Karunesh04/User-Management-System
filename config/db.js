const mongoose = require('mongoose')

const conncetToDb = async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(conn =>{
        console.log(`Connected to DB: ${conn.connection.host}`)
    })
    .catch(err =>{
        console.log(err.message)
        process.exit()
    })
}

module.exports = conncetToDb