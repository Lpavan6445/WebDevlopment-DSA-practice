const express = require('express');
const router = express.Router();

const Author = require("../models/author.model")
const Book = require("../models/books.model")
const crudController = require("../crudCont/crudController");

router.get("",crudController(Author).get)

//Get Books By Author Id 
router.get("/books/:id", async (req,res)=>{
    try{
        const authorName = await Author.find({_id:req.params.id},{author_name:1})
        const authorbooks = await Book.find({authors:req.params.id},{title:1,body:1})
        console.log(authorName)
        res.status(200).send([authorName,authorbooks])
    }
    catch(er){
        console.log(er.message)
    }
})
    

router.post("",crudController(Author).post)
router.patch("/:id",crudController(Author).updateOne)
router.delete("/:id",crudController(Author).deleteOne)

module.exports = router