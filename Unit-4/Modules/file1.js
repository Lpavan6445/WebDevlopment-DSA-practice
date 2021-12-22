const from2nd = require("./file2")
function first(){
    console.log("first file")
} 

function second(){
    from2nd()
}
module.exports = {first,second}