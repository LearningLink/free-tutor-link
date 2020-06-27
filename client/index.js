import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter, Link } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);