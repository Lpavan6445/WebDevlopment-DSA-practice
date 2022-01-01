const express = require("express")
const mongoose = require("mongoose")
const connect = require("./config/db")

// const Book = require("./models/books.model")
// const Author = require("./models/author.model")

// const authorschema = new mongoose.Schema(
//     {
//         author_name:{type:String, required:true},
//         books:[{type:mongoose.Schema.Types.ObjectId,
//                 ref: "book",
//                 required: true,}]
//     }
// )
// const Author = mongoose.model("author",authorschema)

const bookController  = require("./controller/book.controller")
const authorController = require("./controller/author.controller")
const  sectionController = require("./controller/section.controller")

let app = express()
app.use(express.json());

app.use("/book",bookController)
app.use("/author",authorController)
app.use("/section",sectionController)

app.listen("2350", async()=>{
    try{
        await connect()
        console.log("listening on port 2350")
    }
    catch(err){
        console.log(err.message)
    }
})