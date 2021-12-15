
async function getData(input,divsec){
    var response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    var data = await response.json();
    console.log(data.meals);
    showProd(data.meals,divsec)
  }
function showProd(mealsData,x){
    var sec = document.getElementById(x)
    mealsData.forEach(function(meal){
    //   console.log(meal)
       var mealDiv = document.createElement("div")
         mealDiv.id="meal"
        
         var imgDiv = document.createElement("div")
           imgDiv.id="imgDiv"
          var img = document.createElement("img")
            img.id = "mealImg"
          img.src = meal.strMealThumb
          imgDiv.append(img)
         let textDiv = document.createElement("div")
         textDiv.id="textDiv"
           var title = document.createElement("div")
             title.textContent = meal.strMeal
           textDiv.append(title)
         let mealBottom = document.createElement("div")
         mealBottom.id= "mealBottom"
            var price = document.createElement("div")
              price.textContent = `$ ${Math.floor(Math.random() * 200) + 100}`;
            var btn = document.createElement("button")
              btn.id = "addBtn"  
              btn.textContent ="ADD"
            mealBottom.append(price,btn)
            // <---mouseOver--->
            mealDiv.addEventListener("mouseover",function(){
              img.style=` transform: scale(${1.1});
                  transition: all ${0.5}s ease-in-out ${0.1}s;
                  overflow: hidden;`
             })
             mealDiv.addEventListener("mouseleave",function(){
              img.style=` 
                  transition: all ${0.2}s ease-in ${0.1}s;
                  overflow: hidden;`
             })
            // <--------------->
        mealDiv.append(imgDiv,textDiv,mealBottom)
        sec.append(mealDiv)
  })
}
export {getData,showProd}