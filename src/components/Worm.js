import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';
import { initWorm } from '../actions/wormActions';

class Worm extends Component {
  constructor(props) {
    super(props);
    props.dispatch(initWorm());
  }
  moveWorm() {

  }
  render() {
    const p = this.props;
    if (!p.parts) return null;
    let wormParts = p.parts.map((part) => {
      return (<Part x={part.x} y={part.y} />);
    });

    //setInterval(p.dispatch(moveWorm, p.speed);

    return (
      <div>
        {wormParts}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    parts: state.worm && state.worm.parts,
    //speed: state.worm.speed
  };
}
export default connect(mapStateToProps)(Worm);
