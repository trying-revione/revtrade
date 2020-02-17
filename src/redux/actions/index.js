import { dispatch } from 'redux';

function addTicks(tick) {
  return {
    type: 'ADD_TICKS',
    tick
  }
}

export const boundAddTick = (text) => dispatch(addTicks(text));