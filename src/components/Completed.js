import React, { Component } from 'react';
import './styles.css';

export default class Completed extends Component{
    render(){
        return (
            <div className="container">
                <div className="header">
                    Thank You!
                </div>
                <div className="progress-bar">
                    <div className="completed-bar"></div>
                </div>
                <div className="logo">
                {/* I am creating that check mark logo using pure css, instead of using an image*/}
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <button className="go-to-dashboard">
                    Go To Dashboard
                </button>
            </div>
        )
    }
}