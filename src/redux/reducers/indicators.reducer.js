const DefautlState = {
  sma: 0,
  ema: 0
}
export const indicators = (state = DefautlState, action) => {
  switch (action.type) {
    case 'SET_SMA': {
      return Object.assign({}, state, {
        sma: action.payload
      })
    }
    case 'SET_EMA': {
      return Object.assign({}, state, {
        ema: action.payload
      })
    }
    default: {
      return state;
    }
  }
};