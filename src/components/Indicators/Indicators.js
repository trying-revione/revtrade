import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEMA } from '../../services/formulas'
import { getSMA } from '../../services/formulas'
import { setSMA, setEMA } from '../../redux/actions/indicators.actions'



let period = 8;
let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];                    


const Indicators = () => {
  const state = useSelector(state => state)
  const dataChart = state.ticks.dataChart
  const dispatch = useDispatch()

  useEffect(() => {
    // const ema = getEMA(period, values);
    const newData = dataChart.map(e => e.y)

    const ema = getEMA(26, newData);
    dispatch(setEMA(ema[0]))


    const sma = getSMA(26, newData);
    dispatch(setSMA(sma[0]))

  }, [dataChart])

  

  return null

}

export default Indicators;

