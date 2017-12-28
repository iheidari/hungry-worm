import React, { Component } from 'react'
import { connect } from 'react-redux';
import Worm from './Worm';
import Bait from './Bait';
import Header from './Header';
import { changeDirection } from '../actions/wormActions';

class Board extends Component {
  constructor() {
    super();
    document.onkeypress = this.keyPressed.bind(this);
  }

  keyPressed(evt) {
    const disp = this.props.dispatch;
    evt = evt || window.event;
    switch (evt.keyCode) {
      case 37:
        disp(changeDirection('left'));
        break;
      case 38:
        disp(changeDirection('up'));
        break;
      case 39:
        disp(changeDirection('right'));
        break;
      case 40:
        disp(changeDirection('down'));
        break;
      default:
    }
  }
  changeDir(dir) {
    this.props.dispatch(changeDirection(dir));
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
