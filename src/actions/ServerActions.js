import AppDispatcher from '../AppDispatcher'
const ServerActions = {
  getResults(results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESULTS',
      results
    })
  },
  getMarket(market) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_MARKET',
      market
    })
  }
}
export default ServerActions;