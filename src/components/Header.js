import React, { Component } from 'react';

class Header extends Component {
  render() {
    const p = this.props;
    return (
      <div className="boardHeader" style={{ width: p.width }}>
        <span>Score: {p.score}</span>
      </div>
    );
  }
}

export default Header;
