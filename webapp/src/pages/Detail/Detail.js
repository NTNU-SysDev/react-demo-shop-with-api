import React from "react";

import { useParams } from "react-router-dom";
import {API_URL} from "../../config";

export default function Detail() {
  const [product, setProduct] = React.useState(null);

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  React.useEffect(() => {

    fetch(API_URL + `/products/${id}`, {
      method: "GET"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      setProduct(json);
    }).catch(function (err) {
      alert("ERROR:" + err);
    });

  }, [id]);

  return product ? (
    <div>
      <img
        src={product.image}
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
