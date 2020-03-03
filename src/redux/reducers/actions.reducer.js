export const actions = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTION': {
      return action.payload;
    }
    case 'REMOVE_ACTION': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};