import React from "react";
import ReactDom from "react-dom";

import App from "./Component/App";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector("#root")
);
