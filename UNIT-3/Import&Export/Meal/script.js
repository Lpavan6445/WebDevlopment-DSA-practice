function navbar(){
    return `<h4><a href="index.html"> Food </a></h4>
     <div>
         <input id="input" type="text" placeholder="Enter Meal Name">
         <h4  id="submit">Sumbit</h3>
     </div>
     <div>
         <h4><a href="./random.html">Random Meal</a></h4>
         <h4><a href="./Latest.html">Latest</a></h4>
      </div>`
}
async function products(url){
    var res = await fetch(url)
    var data = await res.json()
    console.log(data.meals)
    return display(data.meals) 
}
function display(products1){
    var bd=document.getElementsByTagName("body")[0]
    var container = document.getElementById("container")
    container.innerHTML = ""
    console.log(products1)
    products1.forEach((product)=>{
       
       var div = document.createElement("div")
          div.id="subdiv"
          div.addEventListener("click",()=>{
                 var clickDiv = document.createElement("div")
                 clickDiv.setAttribute("class","clickDiv")
                 var subdiv = document.createElement("div")
                   subdiv.id="subDiv"
                  var close = document.createElement("i")
                    close.setAttribute("class","fas fa-times")
                    close.addEventListener("click", ()=>{
                        clickDiv.style.display = "none"
                    })
                  var clickTextDiv = document.createElement("div")
                    clickTextDiv.id = "clickTxtDiv"
                        var clickTitle = document.createElement("p")
                          clickTitle.innerHTML = product.strMeal
                          var ingredDiv= document.createElement("div")
                          ingredDiv.id="Ingredients"
                            ingredDiv.innerHTML = `<h4>Ingrediants<h4>
                                                   <p>1)${product.strIngredient1}</p>
                                                   <p>2)${product.strIngredient2}</p>
                                                   <p>3)${product.strIngredient3}</p>
                                                   <p4)${product.strIngredient4}</p>
                                                   <p>5)${product.strIngredient5}</p>
                                                   <p>6)${product.strIngredient6}</p>
                                                   <p>7)${product.strIngredient7}</p>
                                                   <p>8)${product.strIngredient8}</p>
                                                   <p>9)${product.strIngredient9}</p>
                                                   <p>10)${product.strIngredient10}</p>`
                        var clickIcon = document.createElement("i")
                        clickIcon.setAttribute("class", "fab fa-youtube")
                        clickIcon.addEventListener("click", ()=>{
                            window.open(product.strYoutube)
                        })
                    var clickImgDiv = document.createElement("div")
                     clickImgDiv.id="clickImgDiv"
                       var clickImg = document.createElement("img")
                       clickImg.src = product.strMealThumb
         
                       clickTextDiv.append(clickTitle,ingredDiv,clickIcon)
                    clickImgDiv.append(clickImg)
                    subdiv.append(clickTextDiv,clickImgDiv)
                    clickDiv.append(close,subdiv)
                console.log("hi")
                bd.append(clickDiv)  
                clickDiv.style.display = "block"   
              })
           var txtDiv = document.createElement("div")
           txtDiv.id = "txtDiv"
               var title = document.createElement("p")
                 title.innerHTML = product.strMeal
               var icon = document.createElement("i")
                 icon.setAttribute("class", "fab fa-youtube")
                 icon.addEventListener("click", ()=>{
                     window.open(product.strYoutube)
                 })
           var imgDiv = document.createElement("div")
           imgDiv.id="imgDiv"
              var img = document.createElement("img")
              img.src = product.strMealThumb

           txtDiv.append(title,icon)
           imgDiv.append(img)
         div.append(txtDiv,imgDiv)
         container.append(div)
    })
}
export {navbar,products,display}