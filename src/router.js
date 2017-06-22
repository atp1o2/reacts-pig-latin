import React from 'react';
import { Route, IndexRoute } from 'react-router';

import View1 from './views/View1/View1.jsx'
import View2 from './views/View2/View2.jsx'
import View3 from './views/View3/View3.jsx'

var routes = (
  <Route>
    <IndexRoute component={View1} />
    <Route path="View1" component={View1} />
    <Route path="View2" component={View2} />
    <Route path="View3" component={View3} />
  </Route>
);

export default routes;
