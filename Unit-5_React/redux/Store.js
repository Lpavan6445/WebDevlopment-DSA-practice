import { createStore } from "redux";
const reducer = (store, action) => {
  switch (action.type) {
case "ADD_TODO":{
      return { ...store, todo: [...store.todo, action.payload] };
    }
    case "UPDATE_TODO":{
      return { ...store,
        todo: store.todo.map((x)=>{
                if(x.id!=action.payload.id){
                  return x
                }else{
                  return action.payload
                }
        })
    }}
    case "DELETE_TODO":{
 return { ...store,
        todo: store.todo.filter((x)=>{
             return x.id!==action.payload.id
        })
    }}
    default:{
      return store;
    }
  }
};

const init = { todo: [] };

// KISS
const store = createStore(reducer, init);


store.dispatch({
  type: "ADD_TODO",
  payload: 
    { id: 1, status: false, title: "Learn Redux" },
  
});
console.log(store.getState());
store.dispatch({
  type: "ADD_TODO",
  payload: 
    { id: 2, status: false, title: "Learn Redux" },
  
})
console.log(store.getState());
store.dispatch({
  type: "UPDATE_TODO",
  payload: 
    { id: 2, status: false, title: "Learn JS" },
  
})
console.log(store.getState());
store.dispatch({
  type: "DELETE_TODO",
  payload: 
    { id: 1, status: false, title: "Learn HTML" },
})

console.log(store.getState());