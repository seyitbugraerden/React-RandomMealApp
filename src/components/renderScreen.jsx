import React, { useContext } from "react";
import { Card } from "primereact/card";
import { MealContext } from "../context/dataContext";
import "./renderScreen.css";
function renderScreen() {
  const { meal } = useContext(MealContext);
  return (
    <>
      <Card>
        <img src={meal.strMealThumb} alt="" />
        <h6>
          {meal.strMeal} <br />{" "}
          <span className="text-muted">
            {meal.strCategory} , {meal.strArea}
          </span>
        </h6>
        <h6>How To Make?</h6>
        <p>{meal.strInstructions}</p>
      </Card>
    </>
  );
}

export default renderScreen;
