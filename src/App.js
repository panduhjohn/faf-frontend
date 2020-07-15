import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';

import Loading from './components/Loading/Loading';

import './App.css';

import store from './components/redux/store/store';

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <React.Suspense fallback={<Loading />}>
                            <MainRouter />
                        </React.Suspense>
                    </Router>
                </Provider>
            </div>
        );
    }
}
