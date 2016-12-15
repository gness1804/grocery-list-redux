import React, { Component } from 'react';

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  toggle(id) {
      this.props.toggleInCart(id);
  }

  toggleEditable() {
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { name, aisle, quantity, note, id, inCart, deleteItem, editItem } = this.props;
    let display;

    if (this.state.editable) {
      display = (
        <div>
          <input defaultValue={name} ref={(c) => { this.name = c; }} placeholder="Name" />
          <input defaultValue={aisle} ref={(c) => { this.aisle = c; }} placeholder="Aisle" />
          <input defaultValue={quantity} ref={(c) => { this.quantity = c; }} placeholder="Quantity" />
          <input defaultValue={note} ref={(c) => { this.note = c; }} placeholder="Note" />
          <button className="save-edits-button" onClick={() => { editItem(this.name.value, this.aisle.value, this.quantity.value, this.note.value, id); }}>Save Edits</button>
          <button className="exit-edit-button" onClick={() => { this.toggleEditable() }}>Exit Editing</button>
          <button className="delete-button" onClick={() => { deleteItem(id) }}>Delete Item</button>
        </div>
      );
    } else {
      display = (<div>
        <h2 className="editable-item">Item: {name}</h2>
        <h3 className="editable-aisle">Aisle: {aisle}</h3>
        <h4 className="note">Your Note: {note}</h4>
        <h5 className="quantity">Quantity: {quantity}</h5>
        {this.props.inCart}
        <button className="edit-button" onClick={() => { this.toggleEditable() }}>Edit Item</button>
        <button className="delete-button" onClick={() => { deleteItem(id) }}>Delete Item</button>
        { inCart ? <button id="in-cart-button" onClick={ () => { this.toggle(id) }}>Remove from Cart</button> : <button id="in-cart-button" onClick={ () => { this.toggle(id) }}>Put in Cart</button>}
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
