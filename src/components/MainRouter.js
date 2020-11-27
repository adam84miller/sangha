import React from 'react';
//import { router } from '../../backend/app';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function MainRouter() {

    return (
        <LoggedInProvider>
        <Router>
            <Switch>
                <Route path='/signup' component={ Signup }></Route>
                <Route path='/Login' component={ Login }></Route>
                <Route path='/ForgotPassword' component={ ForgotPassword }></Route>
                <ProtectedRoute path='/admin' component={ EditUsers }></ProtectedRoute>

                <Route path='/' component={ Home }></Route>
            </Switch>
        </Router>
        </LoggedInProvider>
    )
}
