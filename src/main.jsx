import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MealProvider } from "./context/dataContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MealProvider>
    <App />
  </MealProvider>
);
