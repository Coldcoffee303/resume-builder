




const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/userData"

mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection
mongoose.connection.on('open', _=>{
    console.log(`successfully connected to ${URI}`)
})

mongoose.connection.on("error", err=>{
    console.error("Database Connection error at ", err)
})
