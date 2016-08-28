import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './style.css';

import Layout from './components/Layout'
import Splash from './components/Splash'
import AboutUs from './components/AboutUs'
import ResultsPage from './components/ResultsPage'
import DisplayMarket from './components/DisplayMarket';
import MarketInfo from './components/MarketInfo';
import MarketReviews from './components/MarketReviews';
import MarketStands from './components/MarketStands';
injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash}/>
      <Route path='/about-us' component={AboutUs}/>
      <Route path='/results/zipcode/:zipcode' component={ResultsPage}></Route>
      <Route path='/market/:id' component={DisplayMarket}>
        <Route path='/market/:id/info/:index' component={MarketInfo}/>
        <Route path='/market/:id/reviews/:index' component={MarketReviews}/>
        <Route path='/market/:id/stands/:index' component={MarketStands}/>
      </Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
