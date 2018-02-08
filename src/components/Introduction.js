import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Introduction extends Component{
    render(){
        let emailFlag = this.props.data.flags.email,
            passFlag = this.props.data.flags.password,
            confirmFlag = this.props.data.flags.confirmed;
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
                        <div className="title" style={{color: emailFlag ? 'rgb(175, 175, 175)' : 'red'}}>
                            {emailFlag ? "EMAIL" : "PLEASE ENTER VALID EMAIL"}
                        </div>
                        <input id="email" value={this.props.data.email} type="text" onBlur={this.props.handleUserPassBlur} onChange={this.props.handleUserPassChange} />
                    </div>
                    <div className="password">
                        <div className="title"  style={{color: passFlag ? 'rgb(175, 175, 175)' : 'red'}}>
                            {passFlag ? "PASSWORD" : "ERROR - ATLEAST 6 CHARACTERS"}
                        </div>
                        <input type="password" value={this.props.data.password} id="password" onBlur={this.props.handleUserPassBlur}  onChange={this.props.handleUserPassChange} />
                    </div>
                    <div className="confirm">
                        <div className="title" style={{color: confirmFlag ? 'rgb(175, 175, 175)' : 'red'}}>
                            {confirmFlag ? "CONFIRM" : "PASSWORDS DO NOT MATCH"}
                        </div>
                        <input type="password" value={this.props.data.confirm} id="confirm" onBlur={this.props.handleUserPassBlur} onChange={this.props.handleUserPassChange} />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="navigation">
                    <div className="back"></div>
                    <div className="initial next">
                        <Link to={this.props.validation ? '/info' : '/'}>Next</Link>
                    </div>
                </div>
            </div>
        )
    }
}