import "./App.css";
import AppRouters from "./components/appRouters";
import { MyContext } from "./context/myContext";

function App() {
  return (
    <div className="App">
      <MyContext.Provider>
        <AppRouters />
      </MyContext.Provider>
    </div>
  );
}

export default App;
