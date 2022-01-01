const mongoose = require("mongoose")

const bookschema = new mongoose.Schema(
    {
      title: {type:String, required:true},
      body:{type:String,required:true},
      section:{type:mongoose.Schema.Types.ObjectId,
            ref:"section",
            required:true,
      },
      authors: [{type:mongoose.Schema.Types.ObjectId,
                ref:"author", 
                required:true}]
    },
    {
        versionKey: false,
        timestamps: true,
        strictPopulate: false
    }
)
const Book = mongoose.model("book",bookschema) 

module.exports = Book