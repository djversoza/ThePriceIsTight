import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
  componentWillMount(){
    console.log( this.props.location.state.thang)
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

            <Link to="/"><button type="submit" className="btn btn-primary login navbar-right">Logout</button></Link>

          </div>
        </nav>

        <div className="container">
          <h1>woah</h1>
        </div>

      </div>
    )
  }
}

export default Main;
