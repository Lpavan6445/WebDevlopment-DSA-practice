import {useState,useEffect} from "react"

export const Counter =()=>{
  const [count1, setCount1] = useState(0);
  const [count2, setCount2]  = useState(0);
  console.log("before")
  useEffect(()=>{
    console.log("1")
    if(count1 >10){
      setCount2(count1-10)
    }else{
      setCount2(()=>count1*2)
    }
  },[count1])
  useEffect(()=>{
    console.log("2")
    if(count1 >10){
      setCount2(count1-10)
    }else{
      setCount2(()=>count1*2)
    }
  },[])
  console.log("After")
  return(
    <>
    <h3>Count1:  {count1} </h3>
    <h3> Count2: {count2}</h3>
    <button onClick={()=>{setCount1(count1+1)}}>Click</button>
   </> 
  )
}

