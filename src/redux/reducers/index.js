import { combineReducers } from "redux"
import { ticks } from './ticks.reducer'
import { candles } from './candles.reducer'
import { accions } from './accions.reducer'
import { indicators } from './indicators.reducer'


export default combineReducers({ ticks, candles, accions, indicators  });
