import { combineReducers } from "redux"
import {ticks} from './Ticks'

const candles = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CANDLES': {
      return action.candles;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ ticks, candles  });
