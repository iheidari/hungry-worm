import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';

class Bait extends Component {
  render() {
    const p = this.props;
    if(!p.point) return null;
    return (
      <div>
        <Part x={p.point.x} y={p.point.y} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.bait && state.bait.point,
  };
}

export default connect(mapStateToProps)(Bait);
