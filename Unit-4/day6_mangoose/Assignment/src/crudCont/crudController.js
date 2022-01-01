const get = (model)=>async (req,res)=>{
        try{
        const items = await model.find()
        return res.status(201).send(items)
        }catch(er){
            return res.status(500).send(er.message)
        }
    }

const post= (model)=> async(req,res)=>{
    try{
      const item = await model.create(req.body)
      res.status(201).send(item)
    }catch(er){
        return res.status(500).send(er.message)
    }
}
const updateOne = (model)=> async (req,res)=>{
    try{
        const item = await model.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(item)
    }catch(er){
        res.status(500).send(er.message)
    }
}
const deleteOne = (model)=> async(req,res)=>{
    try{
        const item = await model.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send(item)
    }catch(err){
       res.status(500).send(err.message)
    }
}
const deleteAll = (model)=> async(req,res)=>{
    try{
        const item = await model.findByIdAndDeleteMany(req.body).lean().exec()
        res.status(200).send(item)
    }catch(err){
       res.status(500).send(err.message)
    }
}

module.exports = (model) =>(
    {
        get:get(model),
        post:post(model),
        updateOne:updateOne(model),
        deleteOne:deleteOne(model),
        deleteAll:deleteAll(model)
    }
)