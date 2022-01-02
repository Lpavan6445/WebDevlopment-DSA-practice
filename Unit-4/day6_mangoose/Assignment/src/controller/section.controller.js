const express = require('express');
const router = express.Router()

const Section  = require("../models/section.model")
const Book  = require("../models/books.model")
const crudController = require('../crudCont/crudController')

router.get("",crudController(Section).get)
 
router.get("/books/:id", async (req,res)=>{
    try{
        const sectionName = await Section.find({_id:req.params.id},{section_name:1})
        const sectionbooks = await Book.find({section:req.params.id})
        console.log(sectionName)
        res.status(200).send([sectionName,sectionbooks])
    }
    catch(er){
        console.log(er.message)
    }
})

router.get("/:id/:authid", async (req,res)=>{
    try{
        
            const sections = await Section.findById(req.params.id, req.params.authid)
              .populate({ path: "books_id", select: { title: 1 } })
              .lean()
              .exec(); //db.users => mongoose object => json object (thennable) i.e. why .lean().exec()
             res.send(sections);
          
        // const sectionName = await Section.find({_id:req.params.id},{section_name:1})
        // const sectionbooks = await Book.find({section:req.params.id}).populate({path:""})
        // console.log(sectionName)
        // res.status(200).send([sectionName,sectionbooks])
        // const sections = await Book.find({section:req.params.id},{authors:req.params.authid})
        // .populate("authors").lean().exec()
        // res.send(sections); //db.users => mongoose object => json object (thennable) i.e. why .lean().exec()
    }
    catch(er){
        console.log(er.message)
    }
})
route.get("/:id/not_checkedout", async (req, res) => {
    try {
      const sections = await Section.findById(req.params.id)
        .populate({
          path: "books_id",
          select: { is_checked: false, book_name: 1 },
        })
        .lean()
        .exec(); //db.users => mongoose object => json object (thennable) i.e. why .lean().exec()
      return res.send(sections);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

router.post("",crudController(Section).post)
router.patch("/:id",crudController(Section).updateOne)
router.delete("/:id",crudController(Section).deleteOne)

module.exports = router