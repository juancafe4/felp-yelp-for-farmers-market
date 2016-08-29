import API from '../API';
import AppDispatcher from '../AppDispatcher'
const MarketActions = {
  getResults: API.getResults,
  getMarket: API.getMarket,
  setName(name) {
    AppDispatcher.dispatch({
      type: 'SET_NAME',
      name
    })
  },
  addReview: API.addReview,
  addStand: API.addStand
}

export default MarketActions;