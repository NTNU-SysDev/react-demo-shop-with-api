import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./store/reducers/dataReducer";

const reduxStore = createStore(dataReducer, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
