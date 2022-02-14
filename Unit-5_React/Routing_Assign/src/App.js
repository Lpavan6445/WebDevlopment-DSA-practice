import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
        <Route path="/products" element={<Products />}></Route>
        <Route path="/:prodid" element={<ProductDetails />}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
