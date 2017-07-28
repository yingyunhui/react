import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import "./app.less";
import Hello from "./components/hello/hello"
import Login from "./components/login/login"
import reducer from './reducers';

/*
export default class App extends React.Component{
}
*/

const history=hashHistory;
const store=createStore(reducer);

render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={Login}/>
            <Route path="login" component={Login} />
        </Route>
    </Router>
</Provider>
, document.getElementById('root'));