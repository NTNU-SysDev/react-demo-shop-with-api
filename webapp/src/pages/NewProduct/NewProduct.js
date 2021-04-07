import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setProducts } from "../../store/actions/dataActions";
import { useHistory } from "react-router-dom";

export default function NewProduct() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  // const [id, setId] = React.useState("");

  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  // Use react router history hook to push new path
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      name: name,
      description: description,
      price: parseInt(price),
    };

    fetch("http://localhost:8080/product", {
      method: "POST",
      body: JSON.stringify(newProduct)
    }).then(function () {
      history.push("/");
    }).catch(function (error) {
      alert("ERROR:", error);
    })

    // dispatch(setProducts([...products, newProduct]));
  }

  return (
    <form
      style={{ maxWidth: 400, width: "100%", margin: "30px auto" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Id</label>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          type="text"
          className="form-control"
        />
      </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
