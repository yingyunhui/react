import React from 'react';
import { Link } from 'react-router';
import styles from "./hello.less"

export default class Hello extends React.Component{
    render(){
        return (
            <div className="hello">Hello World!
                <Link to="/login">login</Link>
            </div>
        );
    }
}