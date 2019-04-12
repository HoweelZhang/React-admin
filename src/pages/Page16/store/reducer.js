const defalutState = {
  inputValue: '123',
  list: [2, 3],
};

export default (state = defalutState, action) => {
  console.log(state, action);
  // eslint-disable-next-line no-undef
  if (action.type === 'inputValue_change') {
    const newState = Object.assign({}, state);
    return newState;
  }
  if (action.type === 'add_item') {
    const newState = Object.assign({}, state);
    return newState;
  }
  return state;
};
