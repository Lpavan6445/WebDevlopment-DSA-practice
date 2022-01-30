const express = require('express');
const app = express();
const User = require("../models/user.model")

const { body, validationResult } = require('express-validator')

app.use(express.json())

app.get('/', async(req,res)=>{
    try{
        
        const users = await User.find().lean().exec()
        res.status(200).send(users)
    }catch(er){
        res.status(500).send(er.message)
    }
})
app.post('/', 
   body("first_name").isLength({ min: 1}).withMessage("First Name is Required"),
   body("last_name").isLength({ min: 1}).withMessage("Last Name is Required"),  
   body("email").isEmail().withMessage("Email is not Valid"),
   body("pincode").isLength({ min: 6,max:6 }),
   body("age").custom(value =>{
    if(value<0 || value>100){
        throw new Error("Age should be between 1 and 100.")
    }
    return true;
   }),
   body("gender").isLength({ min: 3}).withMessage("Gender is not Defined"),
   async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const users = await User.create(req.body)
        res.status(200).send(users)
    }catch(er){
        res.status(500).send(er.message)
    }
})

module.exports = app
