import "./App.css";
import AppRouters from "./components/appRouters";

import { MyContext } from "./context/myContext";

function App() {
  return (
    <MyContext.Provider value={{}}>
      <AppRouters />
    </MyContext.Provider>
  );
}

export default App;
