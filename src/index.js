import React from 'react';
import { render } from 'react-dom';

import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
   <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
