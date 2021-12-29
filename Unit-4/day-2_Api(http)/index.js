const { setServers } = require("dns");
const http = require("http")

const server = http.createServer((req, res) => {
     if(req.url == "/users/") {
         res.write("welcome");
         res.end();
     }
});

server.listen(8000, ()=>{
    console.log("listening on port 8000");
})
