const mongoose = require("mongoose")

const sectionSchema = new mongoose.Schema(
    {
        section_name:{type:String, require:true},
        books_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book",
            required:true,
        },
        author_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"author",
            required:true,
        }
    },
    { 
        versionKey: false,
        timestamps:true
    }
)

const Section = mongoose.model("section",sectionSchema)

module.exports = Section