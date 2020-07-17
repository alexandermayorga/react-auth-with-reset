import React, {useState,useEffect} from 'react'
import { Route, Redirect } from "react-router-dom";
import axios from "axios"

export default function Admin({ user, setUser, component: Comp, ...rest }) {
    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    /*
        if no user 
            Loading
                Try and Authenticate
                    Redirect 
                    show page
        if user
            Try and Authenticate
    */


    useEffect(()=>{
        if (!userLoggedIn) return

        axios.post('/api/authenticate')
            .then((res)=>{
                console.log("[Admin.js] --> Authenticated")
                setAuthenticated(true)
                setLoading(false)
            })
            .catch((err) => {
                console.log("[Admin.js] --> Not Authenticated")

                localStorage.removeItem('userLoggedIn')
                setLoading(false)

            })
    },[])

    if (!userLoggedIn || 
        (!loading && !authenticated)) return (<Route
            render={({ location }) =>
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            }
        />)

    if (loading) return "loading...";

    return (        
        <Route {...rest}>
            <Comp user={user} setUser={setUser} />
        </Route>
    );
}