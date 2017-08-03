import React from 'react';
import { Link } from 'react-router';
import Navbar from "../../components/navbar/navbar";
import Slidebar from "../../components/slidebar/slidebar";
import Footbar from "../../components/footbar/footbar";
import "./frame.less";

export default class Frame extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {children}=this.props;
        return (
            <div className="mainframe">
                <Navbar className="navbar"/>
                <Slidebar className="slidebar"/>
                <div className="mainsubs">{children}</div>
                <Footbar/>
            </div>
        )
    }
}