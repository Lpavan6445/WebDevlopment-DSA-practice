async function getData(url){
    try{
        let res = await fetch(url)

        let data = await res.json()

        return data
    }catch(err){

        console.log("err:",err)

    }
 
}

function appendData(data,location){
    location.textContent = ""
    data.forEach(function(product){
        
        let main = document.createElement('div');
            main.id="maindiv"

            let img = document.createElement('img');
                img.id="poster"
            img.src = product.image           
        
        let textDiv = document.createElement('div')
            textDiv.id ="txtDiv"
            let title = document.createElement('h4')
            title.innerHTML = product.title
            title.setAttribute('class',"txt")
    
            let rating = document.createElement('p')
                rating.id = "rating"
            rating.textContent =  "🌟"+product.rating.rate
            rating.setAttribute('class',"txt")
        
        textDiv.append(title,rating)
        main.append(img,textDiv)
        location.append(main)
    })
}

export {getData, appendData}