import React, { Component } from 'react';
import pantry from './pantry-items';
import PantryItemCardContainer from '../containers/PantryItemCardContainer';

class Pantry extends Component {

  render() {

    let pantryDisplay;

    if (pantry) {
      pantryDisplay = pantry.map((item) => {
        return (<PantryItemCardContainer
          {...item}
          key={item.id}
        />)
    });
    }

    return (
      <div className="pantry-container">
        <h2 className="pantry-headline">Pantry</h2>
        {pantryDisplay}
      </div>
    );
  }

}


export default Pantry;
