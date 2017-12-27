import React from 'react';
import { connect } from 'react-redux';
class Part extends React.Component {
  render() {
    const size = 10;
    const divStyle = {
      left: size * this.props.x + 'px',
      top: size * this.props.y + 'px',
      width: size,
      height: size,
      position: 'relative',
      background: 'blueviolet'
    };
    return (
      <div style={divStyle}></div>
    );
  };
}

function mapStateToProps(state) {
  return {
    moveX: state.x,
    moveY: state.y,
  }
}
export default connect(mapStateToProps, null)(Part);
