import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './App.css';
import Header from "./components/header";
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from "./components/private-route";
export default function App() {

    const {
        isLoading,
        error,
    } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <PrivateRoute path="/dashboard">
                        <Dashboard/>
                    </PrivateRoute>
                    <Route path="/" exact={true} component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}
