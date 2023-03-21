import { useState } from "react";
import "./App.css";
import AppRouters from "./components/AppRouters";
import { MyContext } from "./context/myContext";
import { useApp } from "./hooks/useApp";

function App() {
  const [counter, setCounter] = useState(44);
  const { favs_ar, addFav, delFav, resetFav } = useApp();

  return (
    <MyContext.Provider
      value={{ counter, setCounter, favs_ar, addFav, delFav, resetFav }}
    >
      <AppRouters />
    </MyContext.Provider>
  );
}

export default App;
