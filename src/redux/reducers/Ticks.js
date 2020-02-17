const defaultState = {
  subscription: {
    tick: {
      ask: 0,
      epoch: 0
    }
  },
  dataChart: []
}

export const ticks = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TICK': {
      return action.tick;
    }
    case 'SET_HISTORY_TICKS': {
      return action.data;
    }
    case 'SET_SUBSCRIPTION_TICK': {
      return Object.assign({}, state, {
        subscription: action.data
      })
    }
    case 'UPDATE_DATA_CHART': {
      function immutablePush(arr, newEntry){
        return [ ...arr, newEntry ]      
      }
      return Object.assign({}, state, {
        dataChart: immutablePush(state.dataChart, action.data)
      })
    }
    case 'DELETE_ONE_DATA_CHART': {
      function immutablePop(arr){
        return arr.slice(1)     
      }
      return Object.assign({}, state, {
        dataChart: immutablePop(state.dataChart)
      })
    }
    case 'UPDATE_HISTORY_DATA_CHART': {
      return Object.assign({}, state, {
        dataChart: action.data
      })
    }
    default: {
      return state;
    }
  }
};