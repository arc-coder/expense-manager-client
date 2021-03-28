import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const MainWrapper = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/signin"
                    render={(props) => <AuthForm {...props} routeType={0} />}
                />
                <Route
                    exact
                    path="/signup"
                    render={(props) => <AuthForm {...props} routeType={1} />}
                />
                <Redirect to="/signin" />
            </Switch>
        </Router>
    );
};

export default MainWrapper;
