const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_No:{type:Number, required:true},
    batch:{type:String, required:true},
    marks:{type:Number, required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    evaluation_id: {  type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    }
})
    

module.exports = mongoose.model("student",studentSchema)