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
  }
}

export default MarketActions;