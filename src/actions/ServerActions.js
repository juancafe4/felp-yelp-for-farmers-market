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
  },
  updateMarket(market) {
    AppDispatcher.dispatch({
      type: 'UPDATE_MARKET',
      market
    })
  },

  updateReview(review) {
    AppDispatcher.dispatch({
      type: 'UPDATE_REVIEW',
      review
    })
  },
  updateStand(review) {
    AppDispatcher.dispatch({
      type: 'UPDATE_STAND',
      stand
    })
  }
}
export default ServerActions;