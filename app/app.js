import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import "./app.less";
import Hello from "./components/hello/hello";
import Login from "./components/login/login";
import reducer from './reducers/index';

/*
export default class App extends React.Component{
}
*/

const history=browserHistory;
const store=createStore(reducer);

render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={Hello}/>
            <Route path="login" component={Login} />
        </Route>
    </Router>
</Provider>
, document.getElementById('root'));