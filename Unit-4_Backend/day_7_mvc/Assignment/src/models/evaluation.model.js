const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
    date:{type:Date, required:true},
    user_id:{ type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:false
    },
    topic:{type:String, required:true}
})

module.exports = mongoose.model("evaluation",evaluationSchema);