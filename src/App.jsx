import { useState } from "react";
import "./App.css";
import AppRouters from "./components/appRouters";
import { MyContext } from "./context/myContext";

function App() {
  const [counter, setCounter] = useState(35);

  const [todos_ar, setTodosAr] = useState([
    { name: "go home", time: "13:45", id: 1 },
    { name: "go eat", time: "18:00", id: 2 },
    { name: "go sleep", time: "23:00", id: 3 },
  ]);

  const addTodo = (item) => {
    setTodosAr([...todos_ar, item]);
  };

  const resetTodos = () => {
    setTodosAr([]);
  };

  const deletTodoSingle = (_idDel) => {
    const filter_ar = todos_ar.filter((item) => item.id != _idDel);
    setTodosAr(filter_ar);
  };

  return (
    <MyContext.Provider
      value={{
        counter,
        setCounter,
        todos_ar,
        addTodo,
        resetTodos,
        deletTodoSingle,
      }}
    >
      <AppRouters />
    </MyContext.Provider>
  );
}

export default App;
