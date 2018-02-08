import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import BasicInfo from './components/BasicInfo';
import Completed from './components/Completed';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
      date: '',
      month: '',
      year: '',
      gender: 'male',
      source: '',
      flags: {
        email: true,
        password: true,
        confirmed: true
      }
    }
  }
  handleChange = (event) => {
    let StateObject = Object.assign({}, this.state);
    StateObject[event.target.id] = event.target.value;
    this.setState(StateObject);
  }
  handleUserPassBlur = (event) => {
    
    let StateObject = Object.assign({}, this.state);
    
    switch(event.target.id){
      case 'email': 
      //This regex basically checks if email is in the form of - text@text.text
      if(!/\S+@\S+\.\S+/.test(StateObject.email)){
        StateObject.flags.email = false;
      }else{
        StateObject.flags.email = true;
      }
      this.setState(StateObject);
      break;
      case 'password':
      if(StateObject.password.length <= 5){
        StateObject.flags.password = false;
      }else{
        StateObject.flags.password = true;
      }
      if(StateObject.password === StateObject.confirm){
        StateObject.flags.confirmed = true;
      }else{
        StateObject.flags.confirmed = false
      }
      this.setState(StateObject);
      break;
      case 'confirm':
      if(StateObject.password === StateObject.confirm){
        StateObject.flags.confirmed = true;
      }else{
        StateObject.flags.confirmed = false
      }
      this.setState(StateObject);
      break;
      default:
      console.error("Something unexpected happened");
    }
  }
  handleDateChange = (event) => {
    
    let StateObject = Object.assign({}, this.state),
    dateLimit;
    
    if(!dateLimit){
      dateLimit = 31;
    }
    switch(event.target.id){
      case 'date':
      if(!isNaN(event.target.value)){
        if(Number(event.target.value) <= dateLimit || event.target.value === ''){
          StateObject.date = event.target.value;
        }
      }
      this.setState(StateObject);
      break;
      case 'month':
      if(!isNaN(event.target.value)){
        if(Number(event.target.value) > 0 && Number(event.target.value) <= 12 || event.target.value === ''){
          StateObject.month = event.target.value;
        }
      }
      this.setState(StateObject);
      break;
      case 'year':
      if(!isNaN(event.target.value)){
        if(Number(Number(event.target.value) < 2005)){
          StateObject.year = event.target.value;
        }
      }
      this.setState(StateObject);
      break;
      default:
      console.log("SOmething's wrong");
    }
  }
  handleDateBlur = (event) => {
    let StateObject = Object.assign({}, this.state);
    if(event.target.id === 'year'){
      if(Number(event.target.value) < 1950){
        StateObject.year = '1950';
      }else{
        StateObject.year = event.target.value;
      }
      this.setState(StateObject);
    }else{
      let month = StateObject.month;
      if(month === ''){
        return;
      }
      if(month === '2'){
        //It has 29 days max
        if(Number(StateObject.date) > 29){
          StateObject.date = '29';
        }
      }
      else if(month === '1' || month === '3' || month === '5' || month === '7'
      || month === '8' || month === '10' || month === '12'){
        // It has 31 days and you don't need to edit anything, because the date cannot be wrong in this case
      }else{
        // It has 30 days
        if(Number(StateObject.date) > 30){
          StateObject.date = '30';
        }
      }
    }
    this.setState(StateObject);
  }
  handleGenderClick = (event) => {
    let StateObject = Object.assign({}, this.state);
    switch(event.target.id){
      case 'male':
      StateObject.gender = 'male';
      this.setState(StateObject);
      break;
      case 'female':
      StateObject.gender = 'female';
      this.setState(StateObject);
      break;
      case "unspecified":
      StateObject.gender = 'unspecified';
      this.setState(StateObject);
      break;
      default: 
      console.log("Some error")
    }
  }
  handleSourceChange = (event) => {
    let StateObject = Object.assign({},this.state);
    StateObject.source = event.target.value;
    this.setState(StateObject);
  }
  validIntroduction = () => {
    if(/\S+@\S+\.\S+/.test(this.state.email) && this.state.confirm === this.state.password && this.state.confirm !== '' && this.state.flags.confirmed){
      return true;
    }else return false;
  }
  render() {
    var flag = this.validIntroduction(); // Checking if everything's done for the first route, and now clicking on next will go to the next route.
    var secondFlag = true;
    return (
      <div>
      <Route exact path="/"
      render={(props)=>{return <Introduction validation={flag}
      {...props} data={this.state}
      handleUserPassBlur={this.handleUserPassBlur}
      handleUserPassChange={this.handleChange} />}}
      /> 
      <Route exact path="/info"
      render={(props)=>{return <BasicInfo validation={secondFlag}
      {...props} data={this.state}
      handleDateChange={this.handleDateChange}
      handleGenderClick={this.handleGenderClick}
      handleBlur={this.handleDateBlur}
      handleSourceChange={this.handleSourceChange} />}}
      />
      <Route exact path="/completed" render={(props)=>{return <Completed {...props} data={
        {
          email: this.state.email,
          password: this.state.password,
          dateOfBirth: `${this.state.date}/${this.state.month}/${this.state.year}`,
          gender: this.state.gender,
          source: this.state.source
        }
      }/>}} />
      </div>
    );
  }
}

export default App;
