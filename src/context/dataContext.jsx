import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState([]);
  axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      setMeal(response.data);
    });
  return (
    <MealContext.Provider value={{ meal }}>{children}</MealContext.Provider>
  );
};
