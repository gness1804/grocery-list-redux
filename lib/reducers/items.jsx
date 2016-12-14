import { sortBy } from 'lodash';

const items = (state = [], action) => {
  const arr = [];
  switch(action.type) {
    case 'ADD_ITEM':
      localStorage.setItem('items', JSON.stringify(state.concat({ name: action.name, aisle: action.aisle, quantity: action.quantity, note: action.note, id: Date.now() })));
      return state.concat({ name: action.name, aisle: action.aisle, quantity: action.quantity, note:action.note, id: Date.now() });
    case 'DELETE_ITEM':
    localStorage.setItem('items', JSON.stringify(state.filter((i) => { return i.id !== action.id })));
      return state.filter((i) => { return i.id !== action.id });
    case 'DELETE_ALL_ITEMS':
      localStorage.setItem('items', JSON.stringify([]));
      return [];
    case 'SORT_AISLE':
      state.forEach((item) => {
        arr.push(item);
      });
      localStorage.setItem('items', JSON.stringify(arr.sort((a, b) => { return a.aisle - b.aisle })));
      return arr.sort((a, b) => { return a.aisle - b.aisle });
    case 'SORT_ALPHA':
      state.forEach((item) => {
        arr.push(item);
      });
      localStorage.setItem('items', JSON.stringify(_.sortBy(arr, 'name')));
      return _.sortBy(arr, 'name');
    case 'EDIT_ITEM':
    localStorage.setItem('items', JSON.stringify(state.map(item => {
      if (item.id !== action.id) {
        return item;
      }
      return Object.assign({}, item, {
        name: action.name, aisle: action.aisle, quantity: action.quantity, note: action.note, id: action.id,
      });
    })));
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
