import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input';

import { addItem, deleteAllItems, sortAisle, sortAlpha } from '../actions/index';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
	   addItem: (name, aisle, quantity, note) => {
       dispatch(addItem(name, aisle, quantity, note));
     },
     deleteAllItems: () => {
       dispatch(deleteAllItems());
     },
     sortAisle: () => {
       dispatch(sortAisle());
     },
     sortAlpha: () => {
       dispatch(sortAlpha());
     },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
