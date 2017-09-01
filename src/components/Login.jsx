import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Main from './Main.jsx';
import '../App.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  };


  login(e){
    e.preventDefault();

    // fetch('http://127.0.0.1:3001/endPoints/', {
    //   method: 'POST',
    //     headers: {
    //       'Accept' : 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //       body: JSON.stringify({
    //         message: 'hit'
    //       })
    // })
    // .then((res) => res.json())
    // .then((resp) => {
    //     this.props.history.push("/main");
    //
    // })
    console.log(this.state.username)
  }

  updateInputValue(evt) {
   this.setState({
     username: evt.target.value
   });
 }

  render() {
    return(
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
                           <input id="email" type="email" className="form-control" value={this.state.username} onChange={this.updateInputValue.bind(this)} name="email" placeholder="Email Address"/>
                       </div>

                       <div className="input-group login">
                           <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                           <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                       </div>

                       <button type="submit" onClick={this.login.bind(this)} className="btn btn-primary login">Login</button>
                  </form>
        </div>
      </nav>


      <div className="container-fluid">

        <div className="boxes">
          <h1 className="topItems">Woooow</h1>
          <h1 className="topItems">Woooow</h1>
          <h1 className="topItems">Woooow</h1>
          <div>
          <button id="register" className="topItems">Register</button>
          </div>
        </div>

        <div id="stuff">
          <h1>Yoooo</h1>
        </div>

        <div className="boxes2">
          <h1 className="topItems">Woooow</h1>
          <h1 className="topItems">Woooow</h1>
          <h1 className="topItems">Woooow</h1>
        </div>

      </div>

    </div>
  );

  }

}

export default Login;
