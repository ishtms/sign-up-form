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
      gender: '',
      source: '',
      flags: {
        email: true,
        password: true,
        confirmed: true,
        date: true,
        month: true,
        year: true,
        dob: true
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
  validIntroduction = () => {
    if(/\S+@\S+\.\S+/.test(this.state.email) && this.state.confirm === this.state.password && this.state.confirm !== '' && this.state.flags.confirmed){
      return true;
    }else return false;
  }
  render() {
    console.log(this.state)
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
               handleDateChange={this.handleChange} />}}
            />
        <Route exact path="/completed" render={(props)=>{return <Completed {...props} data={this.state}/>}} />
      </div>
    );
  }
}

export default App;
