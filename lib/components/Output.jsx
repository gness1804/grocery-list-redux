import React, { Component } from 'react';
import ItemCard from './ItemCard';

class Output extends Component {

  render() {

    let itemList;

    const items = this.props.state;
    if (items) {
      itemList = items.map(item =>
        <ItemCard
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
      </div>
    );
  }

}


export default Output;
