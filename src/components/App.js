import React from "react";
import { Provider } from "react-redux";
import {  store } from "../Redux/Store";
import Todos from "./Todos";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todos />
      </div>
    </Provider>

  );
}

export default App;
