import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./mystyle.css";


export const ProductDetails = () => {
  const { prodid } = useParams();
  const [productsDetails, setProductsDetails] = useState([]);

  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    fetch(`http://localhost:3001/products/${prodid}`)
      .then((d) => d.json())
      .then((data) => setProductsDetails(data));
  }
  console.log(productsDetails);

  return (
    <div className="ProdDetails">

      <h1>Title : {productsDetails.title}</h1>
      <img  src={productsDetails.image}></img>
      <h3>MRP :- {productsDetails.price}$</h3>
      <h4>{productsDetails.description}</h4>

    </div>
  );
};
