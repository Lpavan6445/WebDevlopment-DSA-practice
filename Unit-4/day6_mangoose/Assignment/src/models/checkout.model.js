const mongoose = require('mongoose')

const checkOutSchema = new mongoose.Schema(
    {
        checkOut:{type:Boolean, requied}
    }
)
module.exports = mongoose.model("checkout",checkOutSchema)