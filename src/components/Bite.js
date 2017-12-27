import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initBite } from '../actions/wormActions';
import Part from './Part'
class Bite extends Component {
  constructor(props){
    super(props);
    props.dispatch(initBite());
  }
  componentDidMount() {
    //this.props.dispatch(initBite());
  }

  render() {
    const p = this.props;
    if(!p.point) return null;
    return (
      <div>
        <Part x={p.point.x} y={p.point.y} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.bite && state.bite.point,
  };
}
export default connect(mapStateToProps)(Bite);
