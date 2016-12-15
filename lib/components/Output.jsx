import React, { Component } from 'react';
import ItemCardContainer from '../containers/ItemCardContainer';
import Pantry from './Pantry';

class Output extends Component {

  render() {

    let itemList;

    const items = this.props.state;
    if (items) {
      itemList = items.map(item =>
        <ItemCardContainer
         {...item}
         key={item.id}
       />
     );
   }

    return (
      <div>
        <article id="item-status-message">
          {items.length > 0 ? <p>Item(s) remaining: {items.length}</p> : <p>There are no items on your list!</p>}
        </article>
        <section id="items-master-container">
          {itemList}
        </section>
        <Pantry />
      </div>
    );
  }

}


export default Output;
