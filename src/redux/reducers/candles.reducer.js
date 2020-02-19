export const candles = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CANDLES': {
      return action.candles;
    }
    default: {
      return state;
    }
  }
};