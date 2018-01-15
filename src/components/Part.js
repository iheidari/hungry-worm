import React from 'react';
class Part extends React.Component {
  render() {
    const p = this.props;
    const size =p.size;
    const divStyle = {
      left: size * p.x ,
      top: size * p.y ,
      width: size,
      height: size,

    };
    return (
      <div style={{...divStyle, ...p.type } }></div>
    );
  };
}
export default Part;
