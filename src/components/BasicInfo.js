import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class BasicInfo extends Component{
    render(){
        console.log(this.props.data.flags.dob)
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
                        <div className="date"><input type="text" id="date" onBlur={this.props.handleBlur} value={this.props.data.date} onChange={this.props.handleDateChange} placeholder="DD" /></div>
                        <div className="month"><input type="text" id="month" onBlur={this.props.handleBlur} value={this.props.data.month} onChange={this.props.handleDateChange} placeholder="MM" /></div>
                        <div className="year"><input type="text" id="year" onBlur={this.props.handleBlur} value={this.props.data.year} onChange={this.props.handleDateChange} placeholder="YYYY" /></div>
                    </div>
                </div>
                <div className="gender">
                    <div className="heading">
                        GENDER
                    </div>
                    <div className="gender-container">
                        <div onClick={this.props.handleGenderClick} id='male' className="male" style={{backgroundColor: this.props.data.gender === 'male' ? "rgb(60, 138, 233)" : 'white', color: this.props.data.gender === 'male' ? 'white' : 'rgb(60, 138, 233)'}}>MALE</div>
                        <div onClick={this.props.handleGenderClick} id="female" className="female"  style={{backgroundColor: this.props.data.gender === 'female' ? "rgb(60, 138, 233)" : 'white', color: this.props.data.gender === 'female' ? 'white' : 'rgb(60, 138, 233)'}}>FEMALE</div>
                        <div onClick={this.props.handleGenderClick} id="unspecified" className="unspecified"  style={{backgroundColor: this.props.data.gender === 'unspecified' ? "rgb(60, 138, 233)" : 'white', color: this.props.data.gender === 'unspecified' ? 'white' : 'rgb(60, 138, 233)'}}>UNSPECIFIED</div>
                    </div>
                </div>
                <div className="source">
                    <div className="heading">
                        WHERE DID YOU HEAR ABOUT US?
                    </div>
                        <select id="source" onChange={this.props.handleSourceChange}>
                            <option value="">Choose</option>
                            <option value="Newspaper">NewsPaper</option>
                            <option value="Television">Television</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Quora">Quora</option>
                            <option value="Medium">Medium</option>
                        </select>
                        <span>{/*Down arrow*/}</span>
                </div>
                <div className="divider"></div>
                <div className="navigation">
                    <div className="button-back"><Link to="/">Back</Link></div>
                    <div className="button-next"><Link to={this.props.data.date && this.props.data.year && this.props.data.month ? '/completed' : "/info"}>Next</Link></div>
                </div>
            </div>
        )
    }
}