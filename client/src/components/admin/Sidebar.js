import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
    const history = useHistory();
    const location = useLocation();

    console.log(location)

    function logout(e) {
        e.preventDefault()
        axios.post('/api/logout')
            .then(res => {
                history.push('/login')
            })
            .catch(err => {
                alert("There was an error. Please try again.")
                console.log(err.response.data)
            })
    }

    return (
        <>
            <div className="brand text-primary">
                <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span> Dashboard
                    </div>

            <hr />

            <ul className="nav nav-pills nav-stacked">
                <li role="presentation" className={`${location.pathname === "/admin" && 'active'}`}>
                    <Link to="/admin" className="text-primary">
                        <span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home
                    </Link>
                </li>
                <li role="presentation" className={`${location.pathname === "/admin/profile" && 'active'}`}>
                    <Link to="/admin/profile" className="text-primary">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span> Profile
                    </Link>
                </li>
                <li role="presentation">
                    <a href="#" className="text-primary" onClick={logout}>
                        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Log Out
                    </a>
                </li>
            </ul>
        </>
    )
}
