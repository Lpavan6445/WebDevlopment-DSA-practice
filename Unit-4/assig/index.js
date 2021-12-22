const readline = require('readline');
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books =[];

function run(){
    readline1.question("Enter Number from 1 t0 3\n 1:Show Books\n 2:Add Book\n 3:Quit\n",(num)=>{
        console.log("num")
        if(num == 1){
            console.log(books)
            run()
        }else if(num == 2){
            readline1.question("Enter Name Of the Book\n",(name)=>{
                books.push(name)
                run()
            })
        }else if(num == 3){
            readline1.question("Are you sure you want to quit - press Y to quit\n",(quit)=>{
                if(quit == "Y"){
                    readline1.close()
                   
                }else{
                    run()
                }
            })
        }else{
            console.log("You have selected an invalid entry")
            run()
        }
    })
}
run()
readline1.on("close", ()=>{console.log("closed")})
