import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/main" component={Main}/>
    </div>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
