import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './style.css';

import Layout from './components/Layout'
import Splash from './components/Splash'
import AboutUs from './components/AboutUs'




injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash}/>
      <Route path='/about-us' component={AboutUs}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
