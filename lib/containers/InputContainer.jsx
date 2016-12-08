import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
	//dispatch...
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input)
