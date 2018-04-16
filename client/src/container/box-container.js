import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Box from '../components/box';

class BoxCon extends React.PureComponent{
  render(){
    return <Box handleClick={this.props.loadColor} color={this.props.box.color} />
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);
