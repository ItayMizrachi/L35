import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import AppRouters from "./components/AppRouters";
import linksSlice from "./features/linksSlice";

const myStore = configureStore({
  reducer: {
    linksSlice,
  },
});

function App() {
  return (
    <Provider store={myStore}>
      <AppRouters />
    </Provider>
  );
}

export default App;
