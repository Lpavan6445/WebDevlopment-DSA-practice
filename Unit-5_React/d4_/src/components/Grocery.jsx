import { useState } from "react";
import { GroceryList } from "./GroceryList";
import { Input } from "./GroceryInput";

export const Grocery = () => {
  let [grocery, addgrocery] = useState("");
  const [grocerys, addGrocerys] = useState([]);
  function groceryFn(input) {
    console.log(input);
    addgrocery(input);
  }
  function addGrocerysFn() {
    addGrocerys([...grocerys, grocery]);
  }
  const deleteFn =(index)=>{
    grocerys.splice(index,1)
    addGrocerys([...grocerys]);
  }
  return (
    <div>
      <h1>Grocery List Management </h1>
       <Input groceryFn={groceryFn} addGrocerysFn={addGrocerysFn}/>
      {grocerys.map((e,index) => {
        return <GroceryList grocery={e} index={index} deleteFn={deleteFn}/>;
      })}
    </div>
  );
};
