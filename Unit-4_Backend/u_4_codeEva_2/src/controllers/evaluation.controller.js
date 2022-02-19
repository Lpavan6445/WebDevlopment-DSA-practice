const express = require('express')
const router = express.Router()
const Evaluation = require('../models/evaluation.model')

router.get('/',async(req,res)=>{
    const user = await Evaluation.find()
    res.status(200).send(user)
})
router.post('/',async(req,res)=>{
    const user = await Evaluation.create(req.body)
    res.status(200).send(user)
})
router.delete('/:id',async(req,res)=>{
    const user = await Evaluation.findByIdAndDelete(req.params.id)
    res.status(200).send(user)
})

module.exports = router