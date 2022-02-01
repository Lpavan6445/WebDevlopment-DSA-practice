import "./grocery.css";
export const GroceryList =({grocery,index,deleteFn})=>{
  return (
    <div id="grocery">
      <div>{grocery}</div>
      <button onClick={()=>{deleteFn(index)}}>Delete</button>
    </div>)
}