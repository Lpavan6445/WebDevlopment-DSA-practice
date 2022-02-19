const express = require("express");
const fs = require('fs');
const User = require("../models/user.model");

const { uploadSingle, uploadMultiple } = require("../middlewares/upload");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    return res.send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/profile", uploadSingle("profile_url"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
       last_name: req.body.last_name,
      profile_url: req.file.path,
    });

    return res.send({ user });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id",async(req,res)=>{
  try{
      const userSi=await User.findById(req.params.id).lean().exec();
      console.log(userSi)
      const user = await User.findByIdAndDelete(req.params.id,{
          new:true
      });
      fs.unlinkSync(userSi.profile_url[0]);  
    res.status(201).send(user)
  }catch(e){
    return res.status(500).send({message:e.message,status:"Failed"})
  }
})

router.patch("/profile/:id",uploadSingle("profile_url"),async(req,res)=>{
  try{
      const userSi=await User.findById(req.params.id).lean().exec();
      console.log(userSi)
      const user = await User.findByIdAndUpdate(req.params.id,{profile_url:req.file.path},{
          new:true
      });
      
      fs.writeFileSync(userSi.profile_url[0], req.file.path);  
    res.status(201).send(user)
  }catch(e){
    return res.status(500).send({message:e.message,status:"Failed"})
  }
})

module.exports = router;
