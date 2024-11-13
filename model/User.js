const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name:{
        type:String
    },
    age:{
        type:String
    },
    image:{
        type:String
    },
    post:{
        type:String

    }
})

const User = mongoose.model('User',userSchema)

module.exports = User