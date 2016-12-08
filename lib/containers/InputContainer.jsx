import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input';

import { addItem } from '../actions/index';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
	   addItem: (name, aisle, quantity, note) => {
       dispatch(addItem(name, aisle, quantity, note));
     },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
