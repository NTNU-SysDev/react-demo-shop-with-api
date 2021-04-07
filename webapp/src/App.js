import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";

import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NewProduct from "./pages/NewProduct/NewProduct";

// import { itemList } from "./itemList";
// import { useDispatch } from "react-redux";
// import { setProducts } from "./store/actions/dataActions";

export default function App() {
  // const dispatch = useDispatch();

  // Previous redux stuff
  // useEffect(() => {
  //   dispatch(setProducts(itemList));
  // }, []);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/shopping-cart"
          render={() => <p>Shopping Cart Coming...</p>}
        />
        <Route path="/details/:id" component={Detail} />
        <Route path="/new-product" component={NewProduct} />
      </Switch>
    </div>
  );
}
