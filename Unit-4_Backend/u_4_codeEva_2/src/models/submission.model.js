const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
    evaluation_id  :{type:mongoose.Schema.Types.ObjectId,ref:"evaluation", required:true},
    answered_by   :{type:mongoose.Schema.Types.ObjectId,ref:"student", required:true},
    status :{type:String, required:true, default: "pending"},
    submission_time :{type:Date, required:true},
    score :{type:Number, required:true},
    assessed_by :{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
    submission_link :{type:String, required:true}
})

module.exports = mongoose.model("submission",submissionSchema)