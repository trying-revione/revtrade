import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSubscriptionTick,
  updateDataChart,
  deleteOneDataChart,
  updateHistoryDataChart
  } from '../../redux/actions/ticks.actions'
  import { setAuthorize } from '../../redux/actions/authorize.actions'

const HISTORY_REQUEST = {
  "ticks_history": "R_10",
  "adjust_start_time": 1,
  "count": 50,
  "end": "latest",
  "start": 1,
  "style": "ticks",
  "subscribe": 1
}

const BUY_CONTRACT = {
  "buy": 1,
  "price": 0.35,
  "parameters": {
    "amount": 0.35,
    "basis": "stake",
    "contract_type": "CALL",
    "currency": "EUR",
    "duration": 2,
    "duration_unit": "m",
    "symbol": "R_10"
  }
}

const AUTHORIZE = { "authorize": "bO5mK2pZjixPevp" }

const useBinary = () => {
  const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=21052');
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const brokerRequest = (data = {}) => {
    if (ws.readyState === 1 ) { ws.send(JSON.stringify(data)) }
    else {
      ws.onopen = function(evt) {
        console.log('WebSocket is open egain.')
        ws.send(JSON.stringify(data))
      };
    }
  }

  const authorize = (data) => {
    dispatch(setAuthorize(data.authorize))
    brokerRequest(HISTORY_REQUEST)
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
    dispatch(updateHistoryDataChart(newArray))
  }
  
  const casosDeUso = (msg_type, data) => {
    // if (msg_type !== 'tick' && msg_type !== 'history' ) {
    //   console.log(`${msg_type}  :: `, data)
    //   debugger
    // }
    switch (msg_type) {
      case 'authorize':
        authorize(data)
        break;
      case 'history':
        history(data)
        break;
      case 'tick':
        subscription(data)
        break;
      case 'buy':
        debugger
        contractBought()
        break;
      default:
        doSomething()
        break;
    }
  }

  function doSomething (msg_type, data) {
    console.log('msg_type', msg_type)
    console.log('data', data)
  }

  function purchase () {
    brokerRequest(BUY_CONTRACT)
  }

  function contractBought () {
    console.log('Se hizo un contrato')
  }

  useEffect(() => {
    ws.onopen = function(evt) {
      console.log('WebSocket is open now.')
      brokerRequest(AUTHORIZE)
    };
  }, []);

  useEffect(() => {
    ws.onmessage = function(msg) {
       var data = JSON.parse(msg.data);
      // console.log('data  ::   ', data);
      casosDeUso(data.msg_type, data)
    };
  });

  useEffect(() => {
    if (state.ticks.dataChart.length >= 50) {
      dispatch(deleteOneDataChart())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.ticks.dataChart])

  useEffect( () => {
    switch(state.actions) {
      case 'buy':
          purchase()
        break;
      default:
        break;
    }
  }, [state.actions])

  return (<></>)
}

export default useBinary;
