const express = require('express');
const router = express.Router();

const Book = require("../models/books.model")
const crudController = require("../crudCont/crudController");

// router.get("",crudController(Book).get)

router.get("/",async (req,res)=>{
    try{
       const books = await Book.find().populate({ path: "authors", select: { author_name: 1} }).lean().exec()
        res.status(201).send(books)
    }catch(er){
        return res.status(500).send(er.message)
    }
})

router.post("",crudController(Book).post)
// router.post("/",async (req,res)=>{
//      try{
//         const book = await Book.create(req.body)
//         return res.status(201).send(book)
//      }catch(err){
//         return res.status(500).send(err.message)
//      }
// })
router.patch("/:id",crudController(Book).updateOne)
// router.patch("/:id", async (req, res) => {
//     try {
//       const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       })
//         .lean()
//         .exec();
  
//       return res.status(201).send(book);
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   });
router.delete("/:id",crudController(Book).deleteOne)
// router.delete("/:id",async (req,res)=>{
//     try{
//         const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
//         return res.status(201).send(book)
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })
router.delete("/",crudController(Book).deleteAll)
module.exports = router