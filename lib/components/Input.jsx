import React, { Component } from 'react';

class Input extends Component {

  render() {

    return (
      <div id="input-items-container">
        <input id="item-input" ref={(c) => { this.name = c; }} type="text" placeholder="Item Name" list="groceries" />
        <input id="aisle-input" ref={(c) => { this.aisle = c; }} type="text" placeholder="Aisle" />
        <input id="quantity-input" ref={(c) => { this.quantity = c; }} type="text" placeholder="Quantity" />
        <input id="note-input" ref={(c) => { this.note = c; }} type="text" placeholder="Note" />
        <button onClick={(e) => {this.props.addItem('foo bread', 9, 'foo', 'foo')} }>Submit</button>
      </div>
    );
  }

}


export default Input;
