import { useContext } from "react";
import { MealContext } from "./context/dataContext";
import "./App.css";

function App() {
  const { meal } = useContext(MealContext);
  return <>{meal}</>;
}

export default App;
