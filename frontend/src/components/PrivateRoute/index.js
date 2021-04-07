import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ composedComponent, ...rest }) => {
    const token = localStorage.getItem('token')
    let component

    if (token)
        component = composedComponent()
    else
        component = <Redirect to="/" />

    return <Route {...rest} component={() => component} />
}

export default PrivateRoute