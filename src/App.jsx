import React, { Component } from 'react';
import Board from './components/Board';
import Login from './components/Login';

import {connect} from 'react-redux';
import { initApp } from './actions/wormActions';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    props.dispatch(initApp());
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/Game' component={Board} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
