import { combineReducers } from "redux"
import { ticks } from './ticks.reducer'
import { candles } from './candles.reducer'
import { actions } from './actions.reducer'
import { indicators } from './indicators.reducer'
import { authorize } from './authorize.reducer'
import { reducer as form } from 'redux-form'


export default combineReducers({ authorize, ticks, candles, actions, indicators, form });
