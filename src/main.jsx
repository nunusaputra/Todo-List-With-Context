import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import TodosContex from "./context/TodosContex.jsx";
import DarkMode from "./context/DarkMode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkMode>
        <TodosContex>
          <App />
        </TodosContex>
      </DarkMode>
    </BrowserRouter>
  </React.StrictMode>
);
