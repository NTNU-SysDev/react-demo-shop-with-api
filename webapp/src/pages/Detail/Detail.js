import React from "react";
// import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import {API_URL} from "../../config";

export default function Detail() {
  const [product, setProduct] = React.useState(null);

  // Previous redux stuff
  // const products = useSelector((state) => state.products);

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  React.useEffect(() => {

    fetch(API_URL + `/product/${id}`, {
      method: "GET"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      setProduct(json);
    }).catch(function (err) {
      alert("ERROR:" + err);
    });


    // const foundProduct = products.find(function (item) {
    //   if (item.id === id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // setProduct(foundProduct);
  }, [id]);

  return product ? (
    <div>
      <img
        src={product.img}
        style={{ maxWidth: 300 }}
        className="card-img-top"
        alt="..."
      />
      <h1>
        <b>Name: {product.name}</b>
      </h1>
      <h4>Description: {product.description}</h4>
      <p>
        <b>Price: {product.price},- kr</b>
      </p>
    </div>
  ) : null;
}
