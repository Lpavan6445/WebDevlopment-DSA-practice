const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    student_code :{type:String, required:true},
    batch:{type:String, required:true},
    current_status :{type:String, required:true, default:"active"},
})

module.exports = mongoose.model("student",studentSchema)