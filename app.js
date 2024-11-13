const express = require('express')
const app = express()
const connectDB = require('./Connection')

app.use(express.json())

connectDB()
app.listen(2000,()=>{
    console.log("Server is start")
})