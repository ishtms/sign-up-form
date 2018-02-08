import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import BasicInfo from './components/BasicInfo';
import Completed from './components/Completed';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/info" component={BasicInfo} />
        <Route exact path="/completed" component={Completed} />
      </div>
    );
  }
}

export default App;
