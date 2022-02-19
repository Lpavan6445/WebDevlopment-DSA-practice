const express = require("express")
const app = express()

const booksData = require('./data');

app.use(logger)

 app.get("/author",(req,res)=>{
    res.status(201)
     return res.send(booksData)
 })

function logger(req,res,next){
    console.log("started")
    next()
}

 app.listen(2230,()=>{
     console.log('listening')
 })