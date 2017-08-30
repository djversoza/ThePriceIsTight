import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedin: null
    };
  };

  componentWillMount(){
    this.state.loggedin === null ? this.setState({loggedin: false}) : this.setState({loggedin: true})
    console.log(this.state.loggedin)
  }

  hellohi(){
    this.setState({
      loggedin: true
    })
  };

  logout(){
    this.setState({
      loggedin: false
    })
  }


  render() {
    const hello = (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Brand</a>
            <a className="navbar-brand" href="#">Brand</a>


          </div>
          <form id="signin" className="navbar-form navbar-right" role="form">
                       <div className="input-group login">
                           <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                           <input id="email" type="email" className="form-control" name="email" placeholder="Email Address"/>
                       </div>

                       <div className="input-group login">
                           <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                           <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                       </div>

                       <button type="submit" onClick={this.hellohi.bind(this)} className="btn btn-primary login">Login</button>
                  </form>
        </div>
      </nav>

      <div className="container">
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      </div>

    </div>
  );

  const two = (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Brand</a>
            <a className="navbar-brand" href="#">Brand</a>

          </div>
        </div>
      </nav>
    </div>
  );

  return <div>{this.state.loggedin ? two : hello}</div>
  }

}

export default App;
