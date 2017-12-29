import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';
import { moveWorm, checkEating } from '../actions/wormActions';

class Worm extends Component {
  constructor() {
    super();
    this.moveWorm = this.moveWorm.bind(this);
  }
  componentDidMount() {
    this.setState({ intervalID: setInterval(this.moveWorm, this.props.speed) });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //only update in case of props change
    //no need to render for this.state.moveCounter changes
    if (nextProps.speed !== this.props.speed) {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID: setInterval(this.moveWorm, this.props.speed) });
    }
    if (nextProps !== this.props)
      return true;
    else
      return false;
  }

  moveWorm() {
    const p = this.props;
    p.dispatch(moveWorm());
    p.dispatch(checkEating());
  }
  render() {
    const p = this.props;
    if (!p.parts) return null;
    let wormParts = p.parts.map((part, index) => {
      return (<Part id={'id' + index} x={part.x} y={part.y} size={p.size} key={index} />);
    });
    return (
      <div>
        {wormParts}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    size: state.board && state.board.cellSize,
    parts: state.worm && state.worm.parts,
    speed: (state.worm && state.worm.speed)
  };
}

export default connect(mapStateToProps)(Worm);
