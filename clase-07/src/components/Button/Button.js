import React, { Component } from "react";
import './Button.css';

export default class Button extends Component{
    render(){
        return(
            <div>
                <label>Hello there</label>
                <button className="Button">Hello Button from React!</button>
            </div>
            
        );
    };
};
