import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';
import { moveWorm, checkEating } from '../actions/wormActions';

class Worm extends Component {
  constructor(props) {
    super(props);
    this.state = { moveCounter: props.speed };
    this.moveWorm = this.moveWorm.bind(this);
  }
  componentDidMount() {
    setInterval(this.moveWorm, 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //only update in case of props change
    //no need to render for this.state.moveCounter changes
    if (nextProps !== this.props)
      return true;
    else
      return false;
  }

  moveWorm() {
    const s = this.state;
    const p = this.props;
    if (s.moveCounter === 0) {
      this.setState({ moveCounter: p.speed });
      p.dispatch(moveWorm());
      p.dispatch(checkEating());
    }
    this.setState({ moveCounter: this.state.moveCounter - 1 });
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
