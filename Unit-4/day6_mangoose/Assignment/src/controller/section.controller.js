const express = require('express');
const router = express.Router()

const Section  = require("../models/section.model")
const Book  = require("../models/books.model")
const crudController = require('../crudCont/crudController')

router.get("",crudController(Section).get)
 
router.get("/:id", async (req,res)=>{
    try{
        const sectionName = await Section.find({_id:req.params.id},{section_name:1})
        const sectionbooks = await Book.find({section:req.params.id},{title:1,body:1})
        console.log(authorName)
        res.status(200).send([sectionName,sectionbooks])
    }
    catch(er){
        console.log(er.message)
    }
})

router.post("",crudController(Section).post)
router.patch("/:id",crudController(Section).updateOne)
router.delete("/:id",crudController(Section).deleteOne)

module.exports = router