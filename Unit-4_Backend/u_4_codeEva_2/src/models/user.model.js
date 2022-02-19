const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    profile_photo_url :{type:String, required:true},
    roles:[{type:String, required:true}]
})

userSchema.pre("save", function(next){
    bcrypt.hash(this.password, 8, function(err, hash) {
        this.password = hash
        return next()
    });
})
userSchema.methods.checkPassword = function(password){
    return new Promise((resolve, reject)=>{
        bcrypt.compare(Password, this.password, function(err, result) {
            if(err) {
               return reject(err) //login
            }
            return resolve(resolve)
        });

    })
}

module.exports = mongoose.model("user",userSchema)