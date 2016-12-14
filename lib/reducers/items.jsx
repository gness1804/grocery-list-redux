import { sortBy } from 'lodash';

const items = (state = [], action) => {
  const arr = [];
  switch(action.type) {
    case 'ADD_ITEM':
      localStorage.setItem('items', JSON.stringify(state.concat({ name: action.name, aisle: action.aisle, quantity: action.quantity, note: action.note, id: Date.now() })));
      return state.concat({ name: action.name, aisle: action.aisle, quantity: action.quantity, note:action.note, id: Date.now() });
    case 'DELETE_ITEM':
      return state.filter((i) => { return i.id !== action.id });
    case 'DELETE_ALL_ITEMS':
      return [];
    case 'SORT_AISLE':
      state.forEach((item) => {
        arr.push(item);
      });
      return arr.sort((a, b) => { return a.aisle - b.aisle });
    case 'SORT_ALPHA':
      state.forEach((item) => {
        arr.push(item);
      });
      return _.sortBy(arr, 'name');
    case 'EDIT_ITEM':
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        }
        return Object.assign({}, item, {
          name: action.name, aisle: action.aisle, quantity: action.quantity, note: action.note, id: action.id,
        });
      });
    default:
      return state;
  }
};

export default items;
