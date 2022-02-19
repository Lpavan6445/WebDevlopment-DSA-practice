const express = require("express")
const mongoose = require("mongoose")
const mealSchema = new mongoose.Schema({
    strMealThumb:{type:String, required:true},
    strCategory:{type:String, required:true},
    strMeal:{type:String, required:true},
    price:{type:Number,required:false}
})
const mealModel = mongoose.model("mealdata",mealSchema)
const connect = ()=>{
    return mongoose.connect("mongodb+srv://cultfit1234:cultfit1234@cultfit.gjn58.mongodb.net/Cultfit-clone?retryWrites=true&w=majority")
}

const app = express()

app.use(express.json())
 
app.get("/:catg",async (req,res)=>{
    try{
        const meals = await mealModel.find({strCategory:req.params.catg})
        res.send(meals)
   }catch(e){
       console.log(e.message)
   }
})

app.post("/",async (req,res)=>{
     try{ 
         for(let i=0; i<req.body.length; i++){
            req.body[i].price = Math.floor(Math.random() * 200) + 100
            req.body[i].strCategory = "Biryani"
         }
         const meals = await mealModel.insertMany(req.body)
    
        res.send(meals)
    }catch(e){
        console.log(e.message)
    }
})

app.delete("/",async (req,res)=>{
    try{
        const meals = await mealModel.deleteMany(req.body)
    res.send(meals)
    }catch(e){
        console.log(e.message)
    }
})


app.listen(2345, async ()=>{
    try{
    await connect()
    console.log("listening on port 2345")
    }catch(e){clear
        console.log(e.message)
    }
})