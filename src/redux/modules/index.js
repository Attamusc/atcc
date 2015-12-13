import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import counter from './counter';
import follows from './follows';

export default combineReducers({
  follows,
  counter,
  router
});
