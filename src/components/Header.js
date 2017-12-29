import React, { Component } from 'react';

class Header extends Component {
  titleArray(items) {
    return items.map((t, i) =>
      <li key={i} style={{ width: (100/items.length)+'%' }}>{t.name}{t.value}</li>)
  };

  render() {
    const p = this.props;
    return (
      <div className="boardHeader" style={{ width: p.width }}>
        <ul>
          {this.titleArray(p.titles)}
        </ul>
      </div>
    );
  }
}

export default Header;
