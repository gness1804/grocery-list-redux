const items = (state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return state.concat({ name: action.name, aisle: action.aisle, quantity: action.quantity, note:action.note, id: Date.now() });
    // case 'OTHER_NAME':
    //   return ///stuff for new state
    default:
      return state;
  }

}

export default items;
