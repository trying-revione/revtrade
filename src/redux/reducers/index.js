import { combineReducers } from "redux"
import { ticks } from './ticks.reducer'
import { candles } from './candles.reducer'
import { accions } from './accions.reducer'
import { indicators } from './indicators.reducer'
import { authorize } from './authorize.reducer'
import { reducer as form } from 'redux-form'


export default combineReducers({ authorize, ticks, candles, accions, indicators, form });
