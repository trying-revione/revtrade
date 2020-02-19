import { combineReducers } from "redux"
import { ticks } from './ticks.reducer'
import { candles } from './candles.reducer'

export default combineReducers({ ticks, candles  });
