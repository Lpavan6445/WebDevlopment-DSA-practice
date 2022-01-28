// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Mobile Operating System</h1>
        <ul>
              {list(["Android","Blackberry","iphone","WindowsPhone"])}
        </ul>
      <h1>Mobile Manufacturing</h1>
        <ul>
              {list(["Samsung","HTC","Micromax","Apple"])}
        </ul>
    </div>
  );
}
function list(arr){
  return arr.map((e)=>{
            return <li>{e}</li>
            }
         )
}
export default App;
