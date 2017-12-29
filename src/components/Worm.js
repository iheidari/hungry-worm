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
    //reset speed in case of change
    if (!nextProps.pause && nextProps.speed !== this.props.speed) {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID: setInterval(this.moveWorm, this.props.speed) });
    }
    //only update in case of props change
    //no need to render for this.state.moveCounter changes
    if (nextProps !== this.props)
      return true;
    else
      return false;
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.props.pause !== nextProps.pause) {
      if (nextProps.pause) {
        clearInterval(this.state.intervalID);
      }
      else {
        clearInterval(this.state.intervalID);
        this.setState({ intervalID: setInterval(this.moveWorm, nextProps.speed) });
      }
    }
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
    size: state.board.cellSize,
    parts: state.worm.parts,
    speed: state.worm.speed,
    pause: state.worm.pause,
  };
}

export default connect(mapStateToProps)(Worm);
