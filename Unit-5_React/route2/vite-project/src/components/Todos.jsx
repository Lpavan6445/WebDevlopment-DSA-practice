import {useEffect,useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import addTodo from "../redux/actions";
import styled from "styled-components";
import axios from "axios";

const Todos=()=>{
    // const todosData = useSelector((store)=>store.todos)
    // console.log(todosData)
    const dispatch = useDispatch()

    const [text,setText] = useState("")
    const [todosData,setTodosData] = useState([])
    useEffect(() => {
        getTodos()
        return ( ()=>{
          console.log("cleanup on change of player props")
       });
     }, []);


      const getTodos = () => {
      //   // dispatch(getTodoLoading());
        axios.get("http://localhost:3001/todos").then(({data})=>{
          // dispatch(addTodo(data))
          setTodosData(data)
          console.log(data)
        })
      //   .then(({data}) => {
      //   //   dispatch(getTodoSuccess(data));
             
      //   //   console.log(todosData)
      //   });
      };
      console.log("reRendered")
    return(
           <TodoStyle>
                <input type="text" placeholder="Enter Title" onChange={(e)=>setText(e.target.value)}/>
                <button onClick={()=>{
                        axios.post("http://localhost:3001/todos",{
                          title: text
                        }).then(getTodos)
                  }}>Add</button>
                  <div className="todosList">
                      {todosData.map((x)=>(<div><Link to={`/${x.id}`}>{x.title}</Link></div>))}
                  </div>
            </TodoStyle> 
    )
}
const TodoStyle = styled.div`
  width:50vw;
  margin:auto;
  &>input[type=text]{
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    padding: 12px 20px; 
    margin: 8px 0;
    /*display: inline-block;*/ 
    border: 1px solid #ccc;
    border-radius: 20px;
  }button{
       background-color: #2196f3; 
        color: white; 
        padding: 10px 25px; 
        margin-left:10px; 
        border-radius: 30px;
        border:none;
        cursor: pointer; 
        font-size: 20px;
  }.todosList{
    display:flex;
    flex-direction:column;
  }div{
     padding:5px;
      background:black; 
     line-height:30px;
     font-size: 25px;	
     letter-spacing: 3px;
     overflow-wrap: break-word;
  }a{
    color: white;
    text-decoration:none;
    text-shadow: 2px 2px #ff0000;
  }
`
export default Todos