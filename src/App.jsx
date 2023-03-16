import { useState } from "react";
import "./App.css";
import AppRouters from "./components/appRouters";
import { MyContext } from "./context/myContext";

function App() {
  const [counter, setCounter] = useState(35);

  return (
    <MyContext.Provider value={{ counter, setCounter }}>
      <AppRouters />
    </MyContext.Provider>
  );
}

export default App;
