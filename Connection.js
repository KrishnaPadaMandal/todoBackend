const mongoose = require("mongoose")
const dbURI ='mongodb+srv://krishnamandalpada:4KUx6ZOmBf6BrxVo@cluster0.xltgj.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0'
const connectDB =  async ()=>{
    try {
        await mongoose.connect(dbURI).then(()=>{
            console.log("DB are Connection")
        })
        
    } catch (error) {
        console.log("DB connection Error",error)
        
    }
}

module.exports=connectDB



