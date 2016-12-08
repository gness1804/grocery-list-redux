export const addItem = (name, aisle, quantity, note) => {
  return {
    type: 'ADD_ITEM',
    name,
    aisle,
    quantity,
    note,
  }
}
