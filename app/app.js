import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import "./app.less";
import Hello from "./components/hello/hello"
import Login from "./components/login/login"

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={account:"",password:""}
        this.handleChange=(event)=>{
            console.log(event.target.value);
        }
        this.login=()=>{
            hashHistory.push('login')
        }
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
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login} />
  </Router>
, document.getElementById('root'));