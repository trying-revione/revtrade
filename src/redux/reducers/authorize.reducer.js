export const authorize = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AUTHORIZE': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};