import './App.css';
import { Table } from './Table';

import {useEffect,useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  let data = [
    {
      name: "Pavan",
      age:21,
      team:"A"
    },{
      name: "vikas",
      age:22,
      team:"B"
    },
    {
      name: "vinay",
      age:25,
      team:"C"
    },{
      name: "sandhan",
      age:30,
      team:"D"
    },
   
  ]
  return (
    <div className="App">
        <Table count={count}>
            <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Team</th>
                  </tr>
              </thead>
              <tbody>
                
              { data.map((item, index)=>{ 
                    return (
                          <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.team}</td>
                          </tr>
                    )
                })
              }
            </tbody> 
        </Table>
    </div>
  );
}

export default App;
