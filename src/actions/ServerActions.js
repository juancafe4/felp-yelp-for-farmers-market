import AppDispatcher from '../AppDispatcher'
const ServerActions = {
  getResults(results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESULTS',
      results
    })
  }
}
export default ServerActions;