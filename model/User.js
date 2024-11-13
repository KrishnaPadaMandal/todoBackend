const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name:{
        type:string
    },
    age:{
        type:string
    },
    image:{
        type:string

    }
})

const User = mongoose.model('User',userSchema)