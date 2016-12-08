import React, { Component } from 'react';

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  toggleEditable() {
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { name, aisle, quantity, note, id, deleteItem, editItem } = this.props;
    let display;

    if (this.state.editable) {
      display = (
        <div>
          <input defaultValue={name} ref={(c) => { this.name = c; }} />
          <input defaultValue={aisle} ref={(c) => { this.aisle = c; }} />
          <input defaultValue={quantity} ref={(c) => { this.quantity = c; }} />
          <input defaultValue={note} ref={(c) => { this.note = c; }} />
          <button onClick={() => { editItem(this.name.value, this.aisle.value, this.quantity.value, this.note.value, id); }}>Save Edits</button>
          <button onClick={() => { this.toggleEditable() }}>Cancel</button>
          <button className="delete-button" onClick={() => { deleteItem(id) }}>Delete Item</button>
        </div>
      );
    } else {
      display = (<div>
        <h2 className="editable-item">Item: {name}</h2>
        <h3 className="editable-aisle">Aisle: {aisle}</h3>
        <h4 className="note">Your Note: {note}</h4>
        <h5 className="quantity">Quantity: {quantity}</h5>
        <button className="edit-button" onClick={() => { this.toggleEditable() }}>Edit Item</button>
        <button className="delete-button" onClick={() => { deleteItem(id) }}>Delete Item</button>
      </div>)
    }

    return (
      <div id={id} className="each-idea-container">
        { display }
      </div>
    );
  }

}


export default ItemCard;
