import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';

class Bait extends Component {
  render() {
    const p = this.props;
    if(!p.point) return null;
    return (
      <div>
        <Part x={p.point.x} y={p.point.y} size={p.size} type={p.type}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.board.cellSize,
    point: state.bait,
    type: state.bait.type
  };
}

export default connect(mapStateToProps)(Bait);
