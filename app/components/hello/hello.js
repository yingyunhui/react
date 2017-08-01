import React from 'react';
import { Link } from 'react-router';

export default class Hello extends React.Component{
    render(){
        return (
            <div>Hello World!
                <Link to="/login">login</Link>
            </div>
        );
    }
}