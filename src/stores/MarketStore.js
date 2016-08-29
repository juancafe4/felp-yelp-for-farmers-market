import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = null;
let _market = null;
let _name = null;
let _reviews = null;
let _stands = null;

class MarketStore extends EventEmitter {
  constructor() {
    super();


    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_RESULTS':
          _results = action.results;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_MARKET':
          _market = action.market;
          _reviews = action.market.reviews;
          this.emit('CHANGE');
          break;

        case 'SET_NAME':
          _name = action.name;
          this.emit('CHANGE')
          break;
        case 'UPDATE_MARKET':
          _market = action.market;
          this.emit('CHANGE')
          break;
        case 'UPDATE_REVIEW':
          _reviews.push(action.review)
          this.emit('CHANGE');
          break;
        case 'UPDATE_STAND':
          _stands.push(action.stand)
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getResults() {
    return _results;
  }

  getMarket() {
    return _market;
  }

  getName() {
    return _name;
  }

  setName(newName) {
    _name = newName;
  }

  getReviews() {
    return _reviews;
  }

  getStands() {
    return _stands;
  }
}


export default new MarketStore();










