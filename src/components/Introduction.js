import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Introduction extends Component{
    render(){
        return (
            <div className="container">
                <div className="header">
                    Signup
                </div>
                <div className="progress-bar">
                    <div className="introduction-bar"></div>
                </div>
                <div className="input-fields">
                    <div className="email">
                        <div className="title">
                            EMAIL
                        </div>
                        <input type="text"/>
                    </div>
                    <div className="password">
                        <div className="title">
                            PASSWORD
                        </div>
                        <input type="password"/>
                    </div>
                    <div className="confirm">
                        <div className="title">
                            CONFIRM PASSWORD
                        </div>
                        <input type="password"/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="navigation">
                    <div className="back"></div>
                    <div className="initial next">
                        <Link to="/info">Next</Link>
                    </div>
                </div>
            </div>
        )
    }
}