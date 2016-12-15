import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard';
import { deleteItem, editItem, toggleInCart } from '../actions/index';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
    editItem: (name, aisle, quantity, note, id) => {
      dispatch(editItem(name, aisle, quantity, note, id));
    },
    toggleInCart: (id, inCart) => {
      dispatch(toggleInCart(id, inCart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
