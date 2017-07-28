import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux';
import "./app.less";
import Hello from "./components/hello/hello"
import Login from "./components/login/login"

const history=hashHistory;

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={account:"",password:""}
        this.handleChange=this.handleChange.bind(this);
        this.login=this.login.bind(this);
    }
    handleChange(event){
        console.log(event.target.value);
    }
    login(){
        history.push('login')
    }
    render(){
        return ( 
            <div>
                <input type="text" placeholder="账号" onChange={this.handleChange}/><br/>
                <input type="text" placeholder="密码" /><br/>
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}
render(
<Provider>
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={App}/>
            <Route path="login" component={Login} />
        </Route>
    </Router>
</Provider>
, document.getElementById('root'));