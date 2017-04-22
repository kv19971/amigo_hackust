import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

import { Provider } from 'react-redux'
import UserPage from './pages/userpage.js'
import UserSentiment from './pages/usersentiment.js'

import UserSummary from './pages/usersummary.js'
import App from './App.jsx';
import RegisterUser from './pages/registeruser.js';
import store from './mainstore'


ReactDOM.render(
    (<Provider store={store}>
    <Router history={hashHistory}>
            <Route path="/" component={App} >
                <Route path="/:id" component={UserPage} />
                <Route path="/:id/summary" component={UserSummary} />
                <Route path="/:id/sentiment" component={UserSentiment} /> 
            </Route>
            <Route path="/register" component={RegisterUser} />
        </Router>
    </Provider>), 
    document.getElementById('app'));