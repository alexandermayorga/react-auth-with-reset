import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

export default function Sidebar({ logout }) {
    let { url } = useRouteMatch();

    return (
        <>
            <div className="brand text-primary">
                <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span> Dashboard
                    </div>

            <hr />

            <ul className="nav nav-pills nav-stacked">
                <li role="presentation" className="active">
                    <Link to="/admin" className="text-primary">
                        <span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home
                    </Link>
                </li>
                <li role="presentation">
                    <Link to={`${url}/profile`} className="text-primary">
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
