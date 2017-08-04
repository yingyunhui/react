import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import Frame from "./components/frame/frame";
import Hello from "./components/hello/hello";
import Server from "./components/server/server";

const history=hashHistory;
const store=createStore(reducer);

render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Hello}/>
            <Route path="server" component={Server}>
                
            </Route>
        </Route>
    </Router>
</Provider>
, document.getElementById('root'));