const express = require('express');
const app = express();
const User = require("../models/user.model")

app.get('/', async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send(users)
    }catch(er){
        res.status(500).send(er.message)
    }
})
app.patch('/', async(req,res)=>{
    try{
        const users = await User.create(req.body).lean().exec()
        res.status(200).send(users)
    }catch(er){
        res.status(500).send(er.message)
    }
})

module.exports = app
