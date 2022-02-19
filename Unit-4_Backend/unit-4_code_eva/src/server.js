const express = require('express');
const app = require('./index')
const connect = require('./config/db')

app.use(express.json())

// app.get("/products",async (req, res)=>{
//     console.log("getting")
//     res.status(200).send("getting")
// })
app.listen(2222, async ()=>{
    try{
        await connect()
        console.log("listening at port 2222")
    }catch(er){
        console.log(er.message)
    }
   
})