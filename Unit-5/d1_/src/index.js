import css from "./style.css"
import img from "./images.png"

var logo = document.getElementById("logo")
logo.setAttribute("src",img)
console.log(img)

var noteInput = document.getElementById("noteInput")
let submit = document.getElementById("submit")

submit.onclick=function(){
    let show = document.getElementById("show")
    let create = document.createElement("h3")
    create.innerHTML=noteInput.value
    show.appendChild(create)
}