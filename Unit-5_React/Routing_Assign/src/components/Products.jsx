import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mystyle.css"

export const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3001/products?_page=${page}&_limit=10`)
      .then((d) => d.json())
      .then((res) => setProductsList(res));
  }, [page]);
  console.log(productsList)
  return (
      <div>
         {productsList.map((e)=>(
             <p className="list" key={e.id}><Link className="l" to={`/${e.id}`}>{e.title}</Link></p>
         ))}
         <button
        //   disabled={condition}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      </div>
  )
};
