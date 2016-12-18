import React, { Component } from 'react';

class PantryItemCard extends Component {


  add(name, aisle, quantity, note) {
    const warning = confirm(`Add ${name} to your list?`);
    if (warning) {
      this.props.addItem(name, aisle, quantity, note);
    }
  }

  render() {

    const { name, aisle, quantity, note } = this.props;

    return (
      <div>
        <h2 className="pantry-item-name" onClick={ () => { this.add(name, aisle, quantity, note) } }>{name}</h2>
      </div>
    );
  }

}


export default PantryItemCard;
