import React from 'react'
import { Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({...rest},children) => {
    const {
        isAuthenticated,
        loginWithRedirect
    } = useAuth0();

    if(!isAuthenticated){
        return loginWithRedirect()
    }

    return (
        <Route{...rest}>{children}</Route>
    )
}

export default PrivateRoute