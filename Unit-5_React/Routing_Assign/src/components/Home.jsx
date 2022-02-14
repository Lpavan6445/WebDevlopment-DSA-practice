import { useState, useEffect } from "react";

export const Home = () => {
  const [total, setTotal] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((d) => d.json())
      .then((res) => setTotal(res));

    // total.map((e) => {
    //   setCat(...cat,e.category)

    // })
  }, []);
  console.log(total);

  
  console.log(cat);



  return (
    <div >
      <h2>Total Products: {total.length}</h2>
    </div>
  )
};
