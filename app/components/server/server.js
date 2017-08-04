import React from 'react';
import { Link } from 'react-router';
import "./server.less"
import Slidebar from "../../components/slidebar/slidebar";
import $ from 'jquery'

export default class Server extends React.Component{
    componentDidMount(){
        $.get("/api/",function(data,status){
            console.log(data)
        });
    }
    render(){
        return (
            <div className="server">
                <Slidebar className="slidebar"/>
                <div className="server-main">lalala</div>
            </div>
        );
    }
}