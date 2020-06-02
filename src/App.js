import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import CoronaCases from "./Component/CoronaCases";
import Header from "./Component/Header";
import Main from "./Component/Main";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
