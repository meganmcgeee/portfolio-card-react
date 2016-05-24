import { Router, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('root')
);
