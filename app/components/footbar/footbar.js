import React from 'react';
import { Link } from 'react-router';
import "./footbar.less";

export default class Footbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="footbar">
                footbar
            </div>
        )
    }
}