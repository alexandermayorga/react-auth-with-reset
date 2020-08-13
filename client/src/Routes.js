import React from 'react'
import { Switch } from "react-router-dom";

import Layout from './components/HOC/Layout'
import PrivateRoute from "./components/authRoutes/PrivateRoutes";
import PublicRoute from "./components/authRoutes/PublicRoutes";

import Home from './components/Home';
import SignIn from './components/Login';
import Register from './components/Register';
import Dashboard from './components/admin/Dashboard';
import Profile from "./components/admin/Profile";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} component={Profile} exact path="/admin/profile" />
        <PrivateRoute {...props} component={Dashboard} exact path="/admin" />
        <PublicRoute {...props} restricted={true} component={SignIn} exact path="/login" />
        <PublicRoute {...props} restricted={true} component={Register} exact path="/register" />
        <PublicRoute {...props} restricted={false} component={Home} exact path="/"  />
      </Switch>
    </Layout>
  )
}

export default Routes
