import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Nav = React.lazy(() => import('./components/Nav/Nav'));


export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Nav />

               
            </>
        );
    }
}
