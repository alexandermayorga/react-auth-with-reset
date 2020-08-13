import React, {useState,useEffect} from 'react'
import { Switch, Route, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from './Sidebar';
import Dashboard from './Dashboard'
import Profile from './Profile'

export default function Main({ user, setUser }) {
    let history = useHistory();
    let location = useLocation();
    let { path } = useRouteMatch();

    function logout(e){
        e.preventDefault()
        axios.post('/api/logout')
        .then(res => {
            localStorage.removeItem('userLoggedIn')
            history.push('/login')
        })
        .catch(err => {
            alert("There was an error. Please try again.")
            console.log(err.response.data)
        })
    }

    useEffect(() => {
        axios.post('/api/authenticate')
            .then(res => {
                console.log("Authenticated Request!")
            })
            .catch(err => {
                console.log("There was an error Authenticating")
                console.log(err)

                history.push('/login')
            })

    }, [location])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-3 sidebar">
                        <Sidebar logout={logout}/>
                    </div>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <div className="dash_body">


                            <div className="alert alert-info text-center" role="alert">
                                <span style={{ marginRight: "15px" }}>Account has not been verified</span> <button id="resend-verification"
                                    className="btn btn-info btn-sm">Resend Verification Link</button>
                            </div>


                            <Switch>
                                <Route exact path={`${path}`} component={Dashboard} />
                                <Route path={`${path}/profile`} component={Profile} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
