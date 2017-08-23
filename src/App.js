import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedin: true,
    };
  }

  render() {
    const hello = (
        <div className="row">
          <h1>yooo</h1>
        </div>
    );

    const two = (
        <h1>Two</h1>
    );

    return <div className="container">{this.state.loggedin ? hello : two}</div>

  }
}

export default App;
