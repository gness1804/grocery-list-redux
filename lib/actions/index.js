export const addItem = (name, aisle, quantity, note) => {
  return {
    type: 'ADD_ITEM',
    name,
    aisle,
    quantity,
    note,
  };
};

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id,
  }
};

export const deleteAllItems = () => {
  return {
    type: 'DELETE_ALL_ITEMS',
  };
};

export const sortAisle = () => {
  return {
    type: 'SORT_AISLE',
  }
}

export const sortAlpha = () => {
  return {
    type: 'SORT_ALPHA',
  }
}

export const editItem = (name, aisle, quantity, note, id) => {
  return {
    type: 'EDIT_ITEM',
    name,
    aisle,
    quantity,
    note,
    id,
  }
}

export const retrieveStoredItems = (items) => {
  return {
    type: 'RETRIEVE_STORED_ITEMS',
    items,
  }
}

export const toggleInCart = (id) => {
  return {
    type: 'TOGGLE_IN_CART',
    id,
  }
}

export const deleteInCart = () => {
  return {
    type: 'DELETE_IN_CART',
  }
}
