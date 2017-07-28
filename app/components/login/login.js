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
        const {count,Action}=this.props;
        return ( 
            <div>
                <input type="text" placeholder="账号" onChange={Action}/><br/>
                <input type="text" placeholder="密码" /><br/>
                <button >登录</button>
                <div>{count}2</div>
            </div>
        );
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

const Action1 = { type: 'increase' }
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    Action: () => dispatch(Action1)
  }
}

// Connected Component
export default Login = connect(mapStateToProps,mapDispatchToProps)(Login)