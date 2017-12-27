import React, { Component } from 'react';
import Board from './components/Board';
import {connect} from 'react-redux';
import { initApp } from './actions/wormActions';

class App extends Component {
  constructor(props){
    super(props)
    props.dispatch(initApp());
  }
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default connect()(App);
