const app = require("./index");
const connect = require("./configs/db");

app.listen(2222, async()=>{
    try{
        await connect()
        console.log("Server is running at 2222")
    }catch(er){
        console.log(er.message)
    }
    
})