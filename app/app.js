import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import todoApp from './reducers/todoApp';
import todoSaga from './sagas/todoSaga';

import Frame from "./components/frame/frame";
import Hello from "./components/hello/hello";
import Login from "./components/login/login";
import Server from "./components/server/server";
import "./app.less"

const history=hashHistory;

const sagaMiddleware = createSagaMiddleware();

const store=createStore(
    todoApp,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(todoSaga);

render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Login}/>
            <Route path="server" component={Server}>
            </Route>
        </Route>
    </Router>
</Provider>
, document.getElementById('root'));