import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  debugg(){
    debugger
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={(e)=>this.debugg(e)}>debugger</button>
      </div>
    );
  }
}

export default App;
