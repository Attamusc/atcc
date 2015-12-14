import moment from 'moment';
import reqwest from 'reqwest';
import createReducer from 'utils/createReducer';
import { FOLLOWS_JSONP } from 'utils/urls';

const FOLLOWERS_FETCHED = Symbol('FOLLOWERS_FETCHED');

export const actions = {
  fetch() {
    return dispatch => {
      reqwest({
        url: FOLLOWS_JSONP,
        type: 'jsonp'
      }).then((followers = {}) => {
        if (!followers._total) { return; }
        dispatch({
          type: FOLLOWERS_FETCHED,
          payload: followers.follows
        });
      });
    };
  },

  eventuallyFetch() {
    // return dispatch => (
      // window.setTimeout(() => dispatch(actions.fetch()), 15000)
    // );
  }
};

export default createReducer({}, {
  [FOLLOWERS_FETCHED]: (state, payload) => {
    const follows = payload.reduce((followers, follow) => {
      followers[follow.user._id] = {
        logo: follow.user.logo,
        name: follow.user.name,
        createdAt: moment(follow.created_at).fromNow(true)
      };

      return followers;
    }, {});

    return Object.assign({}, state, follows);
  }
});
