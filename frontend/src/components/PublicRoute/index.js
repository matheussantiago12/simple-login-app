import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ composedComponent, ...rest }) => {
    const token = localStorage.getItem('token')
    let component

    if (token)
        component = <Redirect to="/main" />
    else
        component = composedComponent()

    return <Route {...rest} component={() => component} />
}

export default PublicRoute