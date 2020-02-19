export function setSubscriptionTick (data) {
  return { type: 'SET_SUBSCRIPTION_TICK', data }
} 

export function updateDataChart (data) {
  return { type: 'UPDATE_DATA_CHART', data }
}

export function deleteOneDataChart (data) {
  return { type: 'DELETE_ONE_DATA_CHART' }
}

export function updateHistoryDataChart (data) {
  return { type: 'UPDATE_HISTORY_DATA_CHART', data }
}