import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StateProvider } from "./Components/StateProvider";
import { InitialState, reducer } from "./Components/Reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={InitialState} reducer={reducerd}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);
