import React, { Component } from 'react';

class PantryItemCard extends Component {


  add(name, aisle, quantity, note) {
    this.props.addItem(name, aisle, quantity, note);
  }

  render() {

    const { name, aisle, quantity, note, addItem } = this.props;

    return (
      <div>
        <h2 onClick={ () => { this.add(name, aisle, quantity, note) } }>{name}</h2>
      </div>
    );
  }

}


export default PantryItemCard;
