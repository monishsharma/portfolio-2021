import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
// import routes from "./routes";
import {isMobile} from 'react-device-detect';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      {
        isMobile ? <h1>mobile</h1> : <App />
      }
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
