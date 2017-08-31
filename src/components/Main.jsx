import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
  render() {
    return(
      <div>
        <Link to="/"><h1>hi</h1></Link>
        <h1>hi</h1>
      </div>
    )
  }
}

export default Main;
