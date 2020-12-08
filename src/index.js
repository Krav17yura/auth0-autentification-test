import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
const accessKey = process.env.REACT_APP_CLIENT_ID;
const domain = process.env.REACT_APP_DOMAIN

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={accessKey}
            redirectUri='/'
        >
            <App/>
        </Auth0Provider>

    </React.StrictMode>,
    document.getElementById('root')
);


