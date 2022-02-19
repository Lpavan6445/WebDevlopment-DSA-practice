const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
   product_name:{type:String, required:true},
   price:{type:Number, required:true},
   colors:[{type:String, required:true}],
   category_name:{type:String, required:true}
})

module.exports = mongoose.model("product",productSchema)