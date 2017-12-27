import React, { Component } from 'react'
import { connect } from 'react-redux';
import Worm from './Worm';
import Bite from './Bite';
import { changeDirection } from '../actions/wormActions';

class Board extends Component {
  constructor() {
    super();
    //this.keyPressed = this.keyPressed.bind(this);
    document.onkeypress = this.keyPressed.bind(this);
  }

  keyPressed(evt) {
    console.log(this)
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
    console.log(dir);
    this.props.dispatch(changeDirection(dir));
  }
  render() {
    //const p = this.props;
    return (
      <div className="board" onKeyDown={this.keyPressed}>
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
