
// import React from 'react';
import { getEMA } from '../services/formulas'
import { getSMA } from '../services/formulas'

let period = 8;
let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];                    


const Indicators = () => {

  const ema = getEMA(period, values);
  console.log('SMA  :::   ', ema)

  const sma = getSMA(period, values);
  console.log('SMA  :::   ', sma)

}

export default Indicators;

