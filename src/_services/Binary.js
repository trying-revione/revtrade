import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Binary = () => {
  const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=21052');

  const state = useSelector(state => state)

  const dispatch = useDispatch()

  const setSubscriptionTick = useCallback(
    (data) => dispatch({ type: 'SET_SUBSCRIPTION_TICK', data }),
    [dispatch]
  )

  const updateDataChart = useCallback(
    (data) => dispatch({ type: 'UPDATE_DATA_CHART', data }),
    [dispatch]
  )

  const deleteOneDataChart = useCallback(
    () => dispatch({ type: 'DELETE_ONE_DATA_CHART' }),
    [dispatch]
  )

  useEffect(() => {
    ws.onopen = function(evt) {
      const data = {
        "ticks": "R_10",
        "subscribe": 1
      }
      ws.send(JSON.stringify(data));
    };
  // TODO:: Hacer algo con este caso
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    
    ws.onmessage = function(msg) {
       var data = JSON.parse(msg.data);
      // console.log('data  ::   ', data);
      setSubscriptionTick(data);

      const tick = data.tick.ask
      const epoch = data.tick.epoch
      updateDataChart({x: epoch, y: tick})
    };
  });

  useEffect(() => {
    console.log(state.ticks.dataChart.length)

    if (state.ticks.dataChart.length >= 50) {
      deleteOneDataChart()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.ticks.dataChart])

  return (<></>)
}

export default Binary;
