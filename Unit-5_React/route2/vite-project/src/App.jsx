import { useState } from 'react'
import {Routes,Route } from "react-router-dom"
import './App.css'
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import TodoDetails from './components/TodoDetails';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
       <Routes>
          <Route path="/"  element={ <Todos />}/>
          <Route path="/:id"  element={ <TodoDetails />}/>
        </Routes>
    </div>
  
  )
}

export default App
