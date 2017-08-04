import React from 'react';
import { Link } from 'react-router';
import "./frame.less";

export default class Frame extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {children}=this.props;
        return (
            <div className="frame">
                <div className="navbar">
                    <div className="logo"></div>
                    <Link to="/">爱奇艺云</Link>
                    <Link to="/server">服务</Link>
                    <div className="info">XXX欢迎回来</div>
                </div>
                <div className="midbar">{children}</div>
                <div className="footbar">
                    <span>反馈</span>
                    <span>© 2010 - 2016, IQIYI Web Services, Inc. 保留所有权利。</span>
                </div>
            </div>
        )
    }
}