import "./App.css";
import AppRouters from "./components/appRouters";
import { MyContext } from "./context/myContext";
import { useStudent } from "./hooks/useStudent";

function App() {
  const { students_ar, addStudent, removeStudent } = useStudent();
  return (
    <div className="App">
      <MyContext.Provider value={{ students_ar, addStudent, removeStudent }}>
        <AppRouters />
      </MyContext.Provider>
    </div>
  );
}

export default App;
