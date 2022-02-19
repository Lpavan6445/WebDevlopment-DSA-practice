const express = require('express');
const router = express.Router();

const Product = require('../models/products.model')

// app.use(express.json())

//get all products
router.get("/", async (req, res) => {
    try{
        
        const products = await Product.find().lean().exec()
         res.status(200).send(products)
    }catch(err){
        res.status(500).send(err.message);
    }
})
//find the product which has the most colours.
router.get("/productwithmorecolors", async (req, res) => {
    try{
        const products = await Product.find().lean().exec()
        let ans
        let sum =0
        var max =null
         for(let i = 0; i < products.length; i++){
            if(products[i].colors.length > max){
              max = products[i].colors.length
              ans = products[i]
            }
         }
         res.status(200).send(ans)
    }catch(err){
        res.status(500).send(err.message);
    }
})
// find the total number of products 
router.get("/total", async (req, res) => {
    try{
        const products = await Product.find()
        let sum=0
        for(let i=0; i<products.length; i++){
             sum += products[i].colors.length
        }
         res.status(200).send(`Total Products: ${sum}`)
    }catch(err){
        res.status(500).send(err.message);
    }
})
//get pructs price greter than 500
router.get("/greterthan500", async (req, res) => {
    try{
        const products = await Product.find({price:{$gt:500}}).lean().exec()
         res.status(200).send(products)
    }catch(err){
        res.status(500).send(err.message);
    }
})
//more than 3 colors 
router.get("/3colors", async (req, res) => {
    try{
        const products = await Product.find().lean().exec()
        let ans=[]
        for(let i=0; i<products.length; i++){
            if(products[i].colors.length >=3){
              ans.push(products[i])     
            }
        }
         res.status(200).send(ans)
    }catch(err){
        res.status(500).send(err.message);
    }
})

//find by color
router.get("/:color", async (req, res) => {
    try{
        
        const products = await Product.find({colors:{$eq:req.params.color}}).lean().exec()

         res.status(200).send(products)
    }catch(err){
        res.status(500).send(err.message);
    }
})






router.post("/", async (req, res) => {
    try{
        const products = await Product.insertMany(req.body)
         res.status(200).send(products)
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router

