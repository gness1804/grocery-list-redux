import React, { Component } from 'react'
import { connect } from 'react-redux'
import Output from '../components/Output';

const mapStateToProps = (state) => ({
  state,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
// 	//dispatch...
//   };
// };

export default connect(mapStateToProps)(Output)
