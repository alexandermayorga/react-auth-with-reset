import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);