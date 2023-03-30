import React from "react";
import { MyContext } from "./context/myContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <MyContext.Provider value={{}}>
      <Router />
    </MyContext.Provider>
  );
};

export default App;
