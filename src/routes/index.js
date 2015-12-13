import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';

import HomeView from 'views/HomeView';
import FollowerDashboardView from 'views/FollowerDashboardView';
import FollowerAlertView from 'views/FollowerAlertView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />

    <Route component={FollowerDashboardView} path='/dashboard/follows' />

    <Route component={FollowerAlertView} path='/alerts/follows' />
  </Route>
);
