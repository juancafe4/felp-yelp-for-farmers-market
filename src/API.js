import axios from 'axios';
import ServerActions from './actions/ServerActions'
const API = {
  getResults(zipcode) {
    axios.get(`/api/markets/zipcode/${zipcode}`)
      .then(res => res.data)
      .then(ServerActions.getResults)
      .catch(console.error)
  },
  getMarket(id, name) {
    axios.post(`/api/markets/id/${id}`, {name})
      .then(res => res.data)
      .then(ServerActions.getMarket)
      .catch(console.error)
  },
  addReview(marketId, review) { // review is an object
    axios.post('/api/reviews', review)
      .then(res => res.data)
      
  }
}

export default API;