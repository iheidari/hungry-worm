import React, { Component } from 'react'
import { connect } from 'react-redux';
import Worm from './Worm';
import Bait from './Bait';
import Header from './Header';
import { keyPressed } from '../actions/wormActions';

class Board extends Component {
  constructor() {
    super();
    document.onkeypress = this.keyPress.bind(this);
  }

  keyPress(evt) {
    const disp = this.props.dispatch;
    evt = evt || window.event;
    switch (evt.keyCode) {
      case 27:
        disp(keyPressed('escape'));
        break;
      case 37:
        disp(keyPressed('left'));
        break;
      case 38:
        disp(keyPressed('up'));
        break;
      case 39:
        disp(keyPressed('right'));
        break;
      case 40:
        disp(keyPressed('down'));
        break;
      default:
    }
  }
  changeDir(dir) {
    this.props.dispatch(keyPressed(dir));
  }
  render() {
    const p = this.props;
    return (
      <div className="board" style={{ width: p.width, height: p.height }}>
        <Header width={p.width} />
        <Worm />
        <Bait />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    width: state.board && state.board.width * state.board.cellSize,
    height: state.board && state.board.height * state.board.cellSize
  }
}
export default connect(mapStateToProps)(Board)
