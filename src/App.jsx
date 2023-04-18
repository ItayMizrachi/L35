import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import { MyContext } from "./context/myContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <MyContext.Provider value={{}}>
      <Router />
      <ToastContainer />
    </MyContext.Provider>
  );
};

export default App;
