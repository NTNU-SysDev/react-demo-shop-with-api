import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product, handleDelete }) {
  const { id, name, description, price, img } = product;

  return (
    <div className="card" style={{ width: "18rem", marginRight: 20 }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text text-bold">
          <b>{price},- kr</b>
        </p>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <Link to={`/details/${id}`} className="btn btn-primary">
            Product Details
          </Link>
          <button onClick={() => handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
