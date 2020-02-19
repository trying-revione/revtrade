import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSubscriptionTick,
  updateDataChart,
  deleteOneDataChart,
  updateHistoryDataChart
  } from '../../redux/actions/ticks.actions'

const HISTORY_REQUEST = {
  "ticks_history": "R_10",
  "adjust_start_time": 1,
  "count": 50,
  "end": "latest",
  "start": 1,
  "style": "ticks",
  "subscribe": 1
}

const useBinary = () => {
  const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=21052');
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const preguntasalBroker = (ws, data = {}) => {
    ws.onopen = function(evt) {
      ws.send(JSON.stringify(data));
    };
  }
  
  const subscription = (data ) => {
    const tick = data.tick.ask
    const epoch = data.tick.epoch
    dispatch(setSubscriptionTick(data))
    dispatch(updateDataChart({x: epoch, y: tick}))
  }

  const history = (data) => {
    const history = data.history;
    const newArray = []
    history.prices.forEach((e, i) => {
      const obj = {x: history.times[i], y: e}
      newArray.push(obj);
    });
    console.log('newArray  ::   ', newArray);
    dispatch(updateHistoryDataChart(newArray))

  }
  
  const casosDeUso = (msg_type, data) => {
    console.log()
      switch (msg_type) {
        case 'history':
          history(data)
          break;
        case 'tick':
          subscription(data)
          break;
    
        default:
          break;
    }
  }

  useEffect(() => {
    preguntasalBroker(ws, HISTORY_REQUEST)
    
  // TODO:: Hacer algo con este caso
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    ws.onmessage = function(msg) {
       var data = JSON.parse(msg.data);
      console.log('data  ::   ', data);
      casosDeUso(data.msg_type, data)
    };
  });

  useEffect(() => {
    if (state.ticks.dataChart.length >= 50) {
      dispatch(deleteOneDataChart())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.ticks.dataChart])

  return (<></>)
}

export default useBinary;
