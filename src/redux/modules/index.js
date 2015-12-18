import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import follows from './follows';

export default combineReducers({
  follows,
  router
});
