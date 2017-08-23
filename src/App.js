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
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
        <a className="navbar-brand" href="#">Brand</a>
    </div>

  </div>
</nav>

    );

    const two = (
        <h1>Two</h1>
    );

    return <div>{this.state.loggedin ? hello : two}</div>

  }
}

export default App;
