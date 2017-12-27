import React, { Component } from 'react'
import { connect } from 'react-redux';
import Worm from './Worm';
import Bite from './Bite';

class Board extends Component {
  render() {
    const p = this.props;
    return (
      <div class="board">
        <Worm />
        <Bite />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Board)
