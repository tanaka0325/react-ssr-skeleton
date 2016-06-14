import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import List from './components/List';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="list" component={List} />
  </Route>
);
