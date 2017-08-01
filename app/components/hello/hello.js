import React from 'react';
import { Link } from 'react-router';
import styles from "./hello.less"
import $ from 'jquery'

export default class Hello extends React.Component{
    render(){
        $.get("/api/",{},function(data){
            console.log(data)
        });
        return (
            <div className="hello">Hello World!
                <Link to="/login">login</Link>
            </div>
        );
    }
}