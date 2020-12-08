import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout
    } = useAuth0();

    return (
        <div className="site-header">

            <div>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <div>
                {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
                {isAuthenticated &&  <button onClick={logout}>Logout</button> }
            </div>
        </div>
    );
}

export default Header
