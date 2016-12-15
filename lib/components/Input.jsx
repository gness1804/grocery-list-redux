import React, { Component } from 'react';
import Category from './Category';
import Datalist from './Datalist';

import aisles from './Aisles';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      submitDisabled: true,
    };
  }

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

  // checkInput() {
  //   if (document.getElementById('item-input').value !== '') {
  //     this.setState({ submitDisabled: false });
  //   } else {
  //     this.setState({ submitDisabled: true });
  //   }
  // }

  checkInputState(e) {
  if (e) {
    if (e.target.value !== '') {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  }
  if (document.getElementById('item-input').value !== '') {
    this.setState({ submitDisabled: false });
  } else {
    this.setState({ submitDisabled: true });
  }
}

  submitItem() {
    this.props.addItem(this.name.value, this.aisle.value, this.quantity.value, this.note.value);
    document.getElementById('item-input').value = '';
    document.getElementById('aisle-input').value = '';
    document.getElementById('quantity-input').value = '';
    document.getElementById('note-input').value = '';
    document.getElementById('category').value = 'Please choose a category.';
    this.setState({ submitDisabled: true });
  }

  render() {

    const { deleteAllItems, sortAisle, sortAlpha } = this.props;

    return (
      <div id="input-items-container">
        <input id="item-input" ref={(c) => { this.name = c; }} type="text" placeholder="Item Name" list="groceries" defaultValue="" onChange={(e) => { this.checkInputState(e)} } onBlur={() => { this.checkInputState()} }/>
        <Category assignAisle={this.assignAisle} />
        <Datalist />
        <input id="aisle-input" ref={(c) => { this.aisle = c; }} type="text" placeholder="Aisle" />
        <input id="quantity-input" ref={(c) => { this.quantity = c; }} type="text" placeholder="Quantity" />
        <input id="note-input" ref={(c) => { this.note = c; }} type="text" placeholder="Note" />
        <button onClick={() => { this.submitItem() }} id="submit-button" disabled={this.state.submitDisabled}>Submit</button>
        <button onClick={() => { sortAisle() }} id="sort-items-button" type="button">Sort by Aisle</button>
        <button onClick={() => { sortAlpha() }} id="sort-alpha-button" type="button">Sort Alpha</button>
        <button id="delete-all-items-button" type="button" onClick={() => { deleteAllItems() }}>Delete ALL Items!</button>
      </div>
    );
  }

}


export default Input;
