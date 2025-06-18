import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



export default function PublicRoute({
isAuthenticated,
component: Component,
...rest
}) {
    return (
       <Route {...rest} 
       component = {(props) => (
           (isAuthenticated !== true ) ? (<Component {...props} />) : (<Redirect to="/" />)
       )}
       />
    )
}
