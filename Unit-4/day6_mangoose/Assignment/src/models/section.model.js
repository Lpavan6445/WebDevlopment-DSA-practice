const mongoose = require("mongoose")

const sectionSchema = new mongoose.Schema(
    {
        section_name:{type:String, require:true}
    },
    { 
        versionKey: false,
        timestamps:true
    }
)

const Section = mongoose.model("section",sectionSchema)

module.exports = Section