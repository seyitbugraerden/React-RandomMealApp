import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MealProvider } from "./context/dataContext.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MealProvider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </MealProvider>
);
