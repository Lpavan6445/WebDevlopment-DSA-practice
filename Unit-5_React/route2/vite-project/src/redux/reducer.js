import ADD_TODO from "./actionTypes";

const init ={
    todos:[]
}

export const reducer = (store=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return { ...store, todos: [...store.todos, ...payload] };
        default:
            return { ...store };
    }

}