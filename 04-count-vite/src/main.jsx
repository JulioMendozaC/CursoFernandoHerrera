import React from "react";
import ReactDOM from "react-dom/client";


import {App} from './HellowWord'
import {CounterApp} from './CounterApp'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp  value={ 100 }/>
  </React.StrictMode>
);
