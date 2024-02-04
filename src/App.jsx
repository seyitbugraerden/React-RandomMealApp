import { useContext } from "react";
import "./App.css";
import { MealContext, MealProvider } from "./context/dataContext";

function App() {
  const { meal } = useContext(MealContext);
  return <>{meal}</>;
}

export default App;
