import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        console.log(response.data.meals[0]);
        setMeal(response.data.meals[0]);
      });
  }, []);

  return (
    <MealContext.Provider value={{ meal }}>{children}</MealContext.Provider>
  );
};
