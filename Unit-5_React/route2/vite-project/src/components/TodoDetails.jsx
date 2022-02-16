import {useParams } from "react-router-dom"
import {useEffect,useState} from "react";
import axios from "axios";
import styled from "styled-components"
const TodoDetails=()=>{
    const [singleTodo, setSingleTodo] = useState("")
    const {id} = useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios.get(`http://localhost:3001/todos/${id}`)
        .then(({data})=>setSingleTodo(data))
    }
    console.log(singleTodo)
    return <TodoStyle>
        <h1>{singleTodo.title}</h1>
    </TodoStyle>
}
const TodoStyle = styled.div`
    color: white;
    text-shadow: 2px 2px #ff0000;
    text-align:center;
`

export default TodoDetails