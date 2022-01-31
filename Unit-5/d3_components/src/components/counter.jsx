import {useState} from "react"

export const Counter =()=>{
  var [counter, changeCounter]= useState(0)
  function sample(value){
    counter = counter+value
    changeCounter(counter)
    console.log(counter)
  }
  return <div id="counter">
     <h1>Counter:{counter}</h1>
     <button onClick={()=>sample(1)}>Increment</button>
     <button onClick={()=>sample(-1)}>Decrement</button>
     <button onClick={()=>sample(counter)}>Double</button>
    </div>
}