const userModel = require('../model/User')


const createUser = async(req,res)=>{
    try {
        console.log("Body",req.body)
        const newUser = new userModel(req.body)
       const result = await newUser.save()
       console.log("Result",result)
       if(result)
       {
        res.status(201).send({message:"User Created Successfully"})
       }
        
    } catch (error) {
        console.log("Error",error)
        
    }
}

const userList = async(req,res)=>{
    try {
        let userList = await userModel.find()
        if(userList)
        {
            res.status(200).json(userList)
        }
        
    } catch (error) {
        console.log("Error",error)
        
    }
}

const userDetails = async(req,res)=>{
    try {
        const userData = await userModel.findOne({_id:req.params.id})
        if(userData)
        {
            res.status(200).json({userDetails:userData})
        }
        
    } catch (error) {
        
    }
}

const userUpdated = async(req,res)=>{
    let updatedUser = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(updatedUser)
    {
        res.status(200).json({message:"User Updated Successfully"})
   
    }
}

const userDelete = async(req,res)=>{
    let userDelete = await userModel.findByIdAndDelete(req.params.id)
    if(userDelete)
        {
            res.status(200).json({message:"User Delete Successfully"})
       
        }
}


module.exports = {
    createUser,
    userList,
    userDetails,
    userUpdated,
    userDelete
}