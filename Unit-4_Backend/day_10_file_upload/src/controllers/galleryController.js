const express = require('express')
const router = express.Router();
const fs = require('fs');
const Gallery = require("../models/gallery.model");

const { uploadSingle, uploadMultiple } = require("../middlewares/upload");

router.delete("/:id",async(req,res)=>{
  try{
      const gallerydata=await Gallery.findById(req.params.id).lean().exec();
      console.log(gallerydata.image_urls)
      const gallery = await Gallery.findByIdAndDelete(req.params.id,{
          new:true
      });
      console.log(req.params.id)
      const allpics = gallerydata.image_urls;
      for(let i =0;i<allpics.length;i++){
          fs.unlinkSync(allpics[i]);
      }   
    res.status(201).send(gallery)
  }catch(e){
    return res.status(500).send({message:e.message,status:"Failed"})
  }
})

router.get("", async (req, res) => {
    try {
      const gallery = await Gallery.find().lean().exec();
  
      return res.send(gallery);
    } catch (err) {
      return res.status(500).send(err.message);
    }
});

router.post("/upload", uploadMultiple(2, "image_urls"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => file.path);
  
      const gallery = await Gallery.create({
         user_id: req.body.user_id,
         image_urls: filePaths,
      });
  
      return res.send({ gallery });
    } catch (err) {
      return res.status(500).send(err.message);
    }
})

  
module.exports = router;

