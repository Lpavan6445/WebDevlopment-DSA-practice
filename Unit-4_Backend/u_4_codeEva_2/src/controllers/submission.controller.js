const express = require('express')
const router = express.Router()
const Submition = require('../models/submission.model')

router.get('/',async(req,res)=>{
    const user = await Submition.find()
    res.status(200).send(user)
})
// find the number of students who submitted the evaluation on time
router.get('/ontime',async(req,res)=>{
    const user = await Submition.find().populate("evaluation_id")
     var count=0
    for(let i=0; i<user.length; i++){
        if(user[i].submission_time < user[i].evaluation_id.end_date.getTime()){
            count++
        }
    }
    res.status(200).send({ontimeSubmitedStudents: count})
})
// find the number of students who submitted the evaluation on time
router.get('/ontime',async(req,res)=>{
    const user = await Submition.find().populate("evaluation_id")
     var count=0
    for(let i=0; i<user.length; i++){
        if(user[i].submission_time < user[i].evaluation_id.end_date.getTime()){
            count++
        }
    }
    res.status(200).send({ontimeSubmitedStudents: count})
})
router.post('/',async(req,res)=>{
    const user = await Submition.create(req.body)
    res.status(200).send(user)
})
router.delete('/:id',async(req,res)=>{
    const user = await Submition.findByIdAndDelete(req.params.id)
    res.status(200).send(user)
})

module.exports = router