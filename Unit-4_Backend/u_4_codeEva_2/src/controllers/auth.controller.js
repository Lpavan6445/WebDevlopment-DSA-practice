require("dotenv").config();
const  jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const newToken = (user)=>{
    return jwt.sign({ user: user }, "secret")
}

const register = async(req,res)=>{
   try{
      let user = await User.findOne({email: req.body.email}).lean().exec()
       if(user){
           return res.status(400).json({
               status: 'failed',
               message:"email is already exit"
           })
       }
       user = await User.create(req.body)

       var tokken = await newToken({user,tokken})
       console.log(tokken)
       res.status(200).send({user,tokken})
    }catch(e){
      res.status(500).json({
          message:e.message
      })
   }

}
const login = async(req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email}).lean().exec()
         if(!user){
             return res.status(400).json({
                 status: 'failed',
                 message:"Email Id is not found"
             })
         }
         
         user = await User.create(req.body)
  
         var tokken = await newToken({user,tokken})
         console.log(tokken)
         res.status(200).send({user,tokken})
      }catch(e){
        res.status(500).json({
            message:e.message
        })
     }
}
module.exports = {register,login}