import React from 'react';
import { Route, IndexRoute } from 'react-router';

import layouts from 'layouts';
import views from 'views';

export default (
  <Route component={layouts.CoreLayout} path='/'>
    <Route component={layouts.DashboardLayout} path='dashboard'>
      <IndexRoute component={views.HomeView} />
      <Route component={views.FollowerDashboardView} path='follows' />
    </Route>


    <Route component={layouts.AlertLayout} path='alerts'>
      <Route component={views.FollowerAlertView} path='follows' />
    </Route>
  </Route>
);
