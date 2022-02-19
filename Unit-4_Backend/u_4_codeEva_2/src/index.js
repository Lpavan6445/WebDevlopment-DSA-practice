const express = require("express")
const app = express()
const userController = require("./controllers/user.controller")
const studentController = require("./controllers/student.controller")
const evaluationController = require("./controllers/evaluation.controller")
const submissionController = require("./controllers/submission.controller")

const  {register, login} = require("./controllers/auth.controller") 
app.use(express.json())
 
 app.post("/register",register)
 app.post("/login",register)

app.use("/users",userController)
app.use("/evaluations",userController)
app.use("/submissions",userController)
app.use("/students",userController)
module.exports = app