import {createStore} from "redux"

// var addTodo ={type:"addTodo", payload:1}


// class Store{
//   constructor(reducer, init){
//      this.reducer = reducer;
//      this.state = init;
//   }
//   getState(){
//     return this.state;
//   }
//   dispatch(actions){
//     this.state = this.reducer(this.state, actions)
//   }
// }
const reducer = (store, action)=>{
   switch(action.type){
   //   case "INC_COUNT":{
   //      return{...store, count: store.count+action.payload}
   //   }
   //   case "DEC_COUNT":{
   //      return{...store, count: store.count-action.payload}
   //   }
     case "ADD_TODO":{
              return{...store, todo: [...store.todo , action.payload]}
     }
     case "UPDATE_TODO":{
      return{...store, todo: [...store.todo ,  action.payload:action.payload]}
     }
     default:
        return store
   }
}


const init ={todo: []}
// const store = new Store(reducer, init);
const store = createStore(reducer, init)

// console.log(store.getState())
// store.dispatch({type:"INC_COUNT", payload:1})
// console.log(store.getState())
// store.dispatch({type:"DEC_COUNT", payload:1})
// console.log(store.getState())
store.dispatch({type:"ADD_TODO", payload:"Hello"})
console.log(store.getState())

store.dispatch({type:"ADD_TODO", payload:"I am"})
console.log(store.getState())

store.dispatch({type:"ADD_TODO", payload:"Pavan"})
console.log(store.getState())

