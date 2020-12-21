import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";


const middleWare = (store) => {
  return (next) => {
    return action => {
      console.log("Middleware is executed", action);
      const result = next(action);
      return result;
    }
  }
}
const store = createStore(reducer, applyMiddleware(middleWare));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App appName="AB's React" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
