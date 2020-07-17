import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import 'App.css';

//Routes
import Home from 'Home'
import Login from 'Login/Login'
import Register from 'Register/Register'
import Admin from 'Admin'
import Main from "Admin/Main"


function App() {

  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login">
            <Login /> 
          </Route>
          <Route path="/register" component={Register} />
          <Admin path="/admin" component={Main} />
        </Switch>

      </div>
  );
}


export default App;
