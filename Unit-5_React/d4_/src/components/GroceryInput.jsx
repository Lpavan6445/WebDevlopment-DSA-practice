export const Input =({groceryFn,addGrocerysFn})=>{
  return(<>
       
      <input onChange={(e)=>{
          groceryFn(e.target.value)}}type="text"/>
      <button onClick={()=>{addGrocerysFn()}}>
        Add
      </button>
  </>)
}