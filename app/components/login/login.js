import React from 'react';
import { connect } from 'react-redux';
import "./login.less";

class Login extends React.Component{
    constructor(props){
        super(props);
        /*when use redux, don't care it.
        this.state={account:"",password:""}
        this.handleChange=this.handleChange.bind(this);
        */
    }
    /*
    handleChange(event){
        console.log(event.target.value);
    }
    */
    render(){
        const {count,action}=this.props;
        console.log(this.props);
        return ( 
            <div>
                <input type="text" placeholder="账号" onChange={action}/><br/>
                <input type="text" placeholder="密码" /><br/>
                <button >登录</button>
                <div>{count}</div>
            </div>
        );
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    let {login}=state;
    return {
        count:login.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    action: () => dispatch({type:'saga_increase'})
  }
}

// Connected Component
export default Login = connect(mapStateToProps,mapDispatchToProps)(Login)