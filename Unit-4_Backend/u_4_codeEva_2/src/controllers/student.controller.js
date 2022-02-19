const express = require('express')
const router = express.Router()
const Student = require('../models/student.model')

router.get('/',async(req,res)=>{
    const user = await Student.find()
    res.status(200).send(user)
})
router.get('/createSec',async(req,res)=>{
    const user = await Student.find()
    res.status(200).send(user)
})
router.post('/',async(req,res)=>{
    const user = await Student.create(req.body)
    res.status(200).send(user)
})
router.delete('/:id',async(req,res)=>{
    const user = await Student.findByIdAndDelete(req.params.id)
    res.status(200).send(user)
})

module.exports = router