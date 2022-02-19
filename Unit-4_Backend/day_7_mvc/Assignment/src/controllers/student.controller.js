const express = require("express");
const router = express.Router();

const Student  = require("../models/student.model")
const crudController = require("./crud.controller");

router.post("", crudController(Student).post);
router.get("", crudController(Student).get);
router.patch("/:id", crudController(Student).updateOne);
router.delete("/:id", crudController(Student).deleteOne);

// all students who gave a particular evaluation
router.get("/dsa",async (req, res)=>{
    try{
        const students =await Student.find().populate("user_id").populate("evaluation_id").lean().exec();
        const parStudenets=[]
        for(let i =0;i<students.length;i++){
            if( students[i].evaluation_id!==undefined){
                if(students[i].evaluation_id.topic=="Dsa"){
                    parStudenets.push(students[i])
                }
            }
        }
        res.status(200).send(parStudenets)
    }
    catch(er){
        res.status(500).send(er.message)
    }
})
router.get("/coding",async (req, res)=>{
    try{
        const students =await Student.find().populate("user_id").populate("evaluation_id").lean().exec();
        const parStudenets=[]
        for(let i =0;i<students.length;i++){
            if( students[i].evaluation_id!==undefined){
                if(students[i].evaluation_id.topic=="coding"){
                    parStudenets.push(students[i])
                }
            }
        }
        res.status(200).send(parStudenets)
    }
    catch(er){
        res.status(500).send(er.message)
    }
})
// student with his personal details who scored the highest mark in the evaluation
router.get("/highestscore",async (req, res)=>{
    try{
        const students =await Student.find().populate("user_id").populate("evaluation_id").lean().exec();
        const parStudenets=[]
        let max =0
        let highScorer
        for(let i =0;i<students.length;i++){
            if( students[i].marks!==undefined){
                if(max == 0||students[i].marks > max){
                    max=students[i].marks;
                    highScorer=students[i]
                }
            }
        }
        res.status(200).send(highScorer)
    }
    catch(er){
        res.status(500).send(er.message)
    }
})

module.exports = router; 