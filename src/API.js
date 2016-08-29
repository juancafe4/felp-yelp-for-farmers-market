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
    .then(rev => {
      let reviewId = rev._id;
      ServerActions.updateReview(rev);
      return axios.put(`/api/markets/${marketId}/addReview/${reviewId}`);
    })
    .then(res => res.data)
    .then(ServerActions.updateMarket)
    .catch(console.error)
  },
  addStand(marketId, stand) { // stand is an object
    axios.post('/api/stands', stand)
    .then(res => res.data)
    .then(std => {
      let standId = std._id;
      ServerActions.updateStand(std);
      return axios.put(`/api/markets/${marketId}/addStand/${standId}`);
    })
    .then(res => res.data)
    .then(ServerActions.updateMarket)
    .catch(console.error)
  }
}

  export default API;