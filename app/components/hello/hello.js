import React from 'react';
import "./hello.less"
import $ from 'jquery'
import {Button} from 'antd'

export default class Hello extends React.Component{
    render(){
        return (
           <div className="hello">Hello World!
               <Button>Hello world!</Button>
           </div>
        );
    }
}