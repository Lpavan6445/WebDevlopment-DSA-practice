const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
      author_name:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps: true, 
    }
)

const Author = mongoose.model("author",authorSchema)
module.exports = Author