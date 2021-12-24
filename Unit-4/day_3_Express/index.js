const express = require('express');
const app = express();

app.use(logger)

app.get("/", (req, res)=>{
    return res.send("Hello")
})

app.get("/user", (req, res)=>{
    return res.send("Users")
})

function logger(req,res,next){
    req.name = "Pavan"
    console.log("Before")
    next()
    console.log("After")
} 

app.listen(2345, ()=>{
    console.log("listening on port 2345")
})

