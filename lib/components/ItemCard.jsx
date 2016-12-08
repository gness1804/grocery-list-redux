import React, { Component } from 'react';

class ItemCard extends Component {

  render() {

    const { name, aisle, quantity, note, id } = this.props;
    let display;

    display = (<div>
        <h2 className="editable-item">Item: {name}</h2>
        <h3 className="editable-aisle">Aisle: {aisle}</h3>
        <h4 className="note">Your Note: {note}</h4>
        <h5 className="quantity">Quantity: {quantity}</h5>
        <button className="edit-button">Edit Item</button>
        <button className="delete-button">Delete Item</button>
      </div>)

    return (
      <div id={id} className="each-idea-container">
        { display }
      </div>
    );
  }

}


export default ItemCard;
