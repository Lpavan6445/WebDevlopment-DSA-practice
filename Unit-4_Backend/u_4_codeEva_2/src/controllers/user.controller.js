const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.get('/',async(req,res)=>{
    const user = await User.find()
    res.status(200).send(user)
})
router.post('/',async(req,res)=>{
    const user = await User.create(req.body)
    res.status(200).send(user)
})
router.delete('/:id',async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).send(user)
})

module.exports = router