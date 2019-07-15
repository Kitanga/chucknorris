import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "./styles.css";

import App from "./App";

import CategoryStore from "./store/CategoryStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={CategoryStore}>
    <App />
  </Provider>,
  rootElement
);
