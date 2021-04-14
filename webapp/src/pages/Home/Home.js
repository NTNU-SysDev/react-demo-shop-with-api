import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import {API_URL} from "../../config";

export default function Home() {
  const [data, setData] = React.useState([]);
  // Previous redux stuff
  // const products = useSelector(state => state.products);

  function loadData() {
    fetch(API_URL + "/product", {
      method: "GET"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      setData(json);
    }).catch(function (err) {
      alert("ERROR:" + err);
    });
  }

  React.useEffect(() => {
    loadData();
  }, []);

  function handleDelete(id) {
    fetch(API_URL + `/product/${id}`, {
      method: "DELETE"
    }).then(function() {
      loadData();
    }).catch(function (error) {
      alert("ERROR:" + error);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40
      }}
    >
      {/* Content */}
      {data.map(function (item) {
        return <Card key={item.id} product={item} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
