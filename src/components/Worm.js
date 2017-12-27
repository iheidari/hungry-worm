import React, { Component } from 'react';
import { connect } from 'react-redux';
import Part from './Part';
import { initWorm, moveWorm } from '../actions/wormActions';

class Worm extends Component {
  constructor(props) {
    super(props);
    props.dispatch(initWorm());
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
      p.dispatch(moveWorm())
    }
    this.setState({ moveCounter: this.state.moveCounter - 1 });
  }
  render() {
    const p = this.props;
    if (!p.parts) return null;
    let wormParts = p.parts.map((part, index) => {
      return (<Part id={'id' + index} x={part.x} y={part.y} key={index} />);
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
    parts: state.worm && state.worm.parts,
    speed: (state.worm && state.worm.speed) || 20
  };
}
export default connect(mapStateToProps)(Worm);
