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
