import { useContext } from "react";
import "./App.css";
import { MealContext } from "./context/dataContext";
import RenderScreen from "./components/renderScreen";

function App() {
  const { meal } = useContext(MealContext);
  return (
    <>
      <RenderScreen />
    </>
  );
}

export default App;
