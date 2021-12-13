async function getData(user){
  try{
    var response = await fetch(`https://api.github.com/users/${user}`)
    var data = await response.json()
    return data
  }catch(errors){
    console.log("Err:", err)
  }
}
export {getData}