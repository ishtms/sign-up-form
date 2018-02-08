import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class BasicInfo extends Component{
    render(){
        return (
            <div className="container">
                <div className="header">
                    Signup
                </div>
                <div className="progress-bar">
                    <div className="basic-bar"></div>
                </div>
                <div className="birth">
                    <div className="heading">
                        DATE OF BIRTH
                    </div>
                    <div className="date-container">
                        <div className="date"><input type="text" placeholder="DD" /></div>
                        <div className="month"><input type="text" placeholder="MM" /></div>
                        <div className="year"><input type="text" placeholder="YYYY" /></div>
                    </div>
                </div>
                <div className="gender">
                    <div className="heading">
                        HEADING
                    </div>
                    <div className="gender-container">
                        <div className="male active">MALE</div>
                        <div className="female">FEMALE</div>
                        <div className="unspecified">UNSPECIFIED</div>
                    </div>
                </div>
                <div className="source">
                    <div className="heading">
                        WHERE DID YOU HEAR ABOUT US?
                    </div>
                        <select id="source">
                            <option value="newspaper">NewsPaper</option>
                            <option value="tv">Television</option>
                            <option value="facebook">Facebook</option>
                            <option value="Quora">Quora</option>
                            <option value="Medium">Medium</option>
                        </select>
                        <span>{/*Down arrow*/}</span>
                </div>
                <div className="divider"></div>
                <div className="navigation">
                    <div className="button-back"><Link to="/">Back</Link></div>
                    <div className="button-next"><Link to="/completed">Next</Link></div>
                </div>
            </div>
        )
    }
}