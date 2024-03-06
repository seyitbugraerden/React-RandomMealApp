import { useContext } from "react";
import { MealContext } from "./context/dataContext";
import RenderScreen from "./components/renderScreen";
import "./App.css";

function App() {
  const { meal } = useContext(MealContext);
  return (
    <>
      <RenderScreen />
    </>
  );
}

export default App;
