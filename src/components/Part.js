import React from 'react';
class Part extends React.Component {
  render() {
    const size = 10;
    const divStyle = {
      left: size * this.props.x ,
      top: size * this.props.y ,
      width: size,
      height: size,
      background: 'blueviolet'
    };
    return (
      <div style={divStyle}></div>
    );
  };
}
export default Part;
