import React, { Component } from 'react';

class Input extends Component {

  render() {

    const { addItem } = this.props;

    return (
      <div id="input-items-container">
        <input id="item-input" ref={(c) => { this.name = c; }} type="text" placeholder="Item Name" list="groceries" />
        <input id="aisle-input" ref={(c) => { this.aisle = c; }} type="text" placeholder="Aisle" />
        <input id="quantity-input" ref={(c) => { this.quantity = c; }} type="text" placeholder="Quantity" />
        <input id="note-input" ref={(c) => { this.note = c; }} type="text" placeholder="Note" />
        <button onClick={() => { addItem(this.name.value, this.aisle.value, this.quantity.value, this.note.value); }}>Submit</button>
        <button id="sort-items-button" type="button">Sort by Aisle</button>
        <button id="sort-alpha-button" type="button">Sort Alpha</button>
        <button id="delete-all-items-button" type="button">Delete ALL Items!</button>
      </div>
    );
  }

}


export default Input;
