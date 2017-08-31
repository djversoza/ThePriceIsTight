import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Main from './Main.jsx';
import '../App.css';

class Login extends Component {

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
                           <input id="email" type="email" className="form-control" name="email" placeholder="Email Address"/>
                       </div>

                       <div className="input-group login">
                           <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                           <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                       </div>

                       <Link to="main"><button type="submit" className="btn btn-primary login">Login</button></Link>
                  </form>
        </div>
      </nav>


      <div className="container">
        <h1>hehe</h1>
      </div>

    </div>
  );

  }

}

export default Login;
