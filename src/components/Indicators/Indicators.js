import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEMA } from '../../services/formulas'
import { getSMA } from '../../services/formulas'
import { setSMA, setEMA } from '../../redux/actions/indicators.actions'                  

const Indicators = () => {
  const state = useSelector(state => state)
  const dataChart = state.ticks.dataChart
  const dispatch = useDispatch()

  useEffect(() => {
    // const ema = getEMA(period, values);
    const newData = dataChart.map(e => e.y)

    const ema = getEMA(48, newData)[0];
    dispatch(setEMA(ema))


    const sma = getSMA(48, newData)[0];
    dispatch(setSMA(sma))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataChart])

  return null

}

export default Indicators;

