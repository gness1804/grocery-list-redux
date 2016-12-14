import React, { Component } from 'react';
import Category from './Category';
import Datalist from './Datalist';

import aisles from './Aisles';

class Input extends Component {

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('items'));
    this.props.retrieveStoredItems(items);
  }

  assignAisle = (category) => {
    if (category === 'Produce' || category === 'Meat' || category === 'Deli/Prepared Foods' || category === 'Checkout' || category === 'Bakery' || category === 'Pest Control(Front of Store)' || category === 'Dairy and Orange Juice'){
      document.getElementById('aisle-input').value = category;
    } else {
      document.getElementById('aisle-input').value = aisles[category];
    }
  }

  render() {

    const { addItem, deleteAllItems, sortAisle, sortAlpha } = this.props;

    return (
      <div id="input-items-container">
        <input id="item-input" ref={(c) => { this.name = c; }} type="text" placeholder="Item Name" list="groceries" defaultValue="" />
        <Category assignAisle={this.assignAisle} />
        <Datalist />
        <input id="aisle-input" ref={(c) => { this.aisle = c; }} type="text" placeholder="Aisle" />
        <input id="quantity-input" ref={(c) => { this.quantity = c; }} type="text" placeholder="Quantity" />
        <input id="note-input" ref={(c) => { this.note = c; }} type="text" placeholder="Note" />
        <button onClick={() => { addItem(this.name.value, this.aisle.value, this.quantity.value, this.note.value); }}>Submit</button>
        <button onClick={() => { sortAisle() }} id="sort-items-button" type="button">Sort by Aisle</button>
        <button onClick={() => { sortAlpha() }} id="sort-alpha-button" type="button">Sort Alpha</button>
        <button id="delete-all-items-button" type="button" onClick={() => { deleteAllItems() }}>Delete ALL Items!</button>
      </div>
    );
  }

}


export default Input;
