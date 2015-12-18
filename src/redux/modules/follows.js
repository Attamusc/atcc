import moment from 'moment';
import reqwest from 'reqwest';
import createReducer from 'utils/createReducer';
import { FOLLOWS_JSONP } from 'utils/urls';

const FOLLOWERS_FETCHED = Symbol('FOLLOWERS_FETCHED');
const SEED_FOLLOWERS = Symbol('SEED_FOLLOWERS');
const POP_FOLLOWS_QUEUE = Symbol('POP_FOLLOWS_QUEUE');

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

  seed() {
    return dispatch => {
      reqwest({
        url: FOLLOWS_JSONP,
        type: 'jsonp'
      }).then((followers = {}) => {
        if (!followers._total) { return; }
        dispatch({
          type: SEED_FOLLOWERS,
          payload: followers.follows
        });
      });
    };
  },

  poll() {
    return dispatch => (
      window.setTimeout(() => dispatch(actions.fetch()), 15000)
    );
  },

  popFollowQueue: () => ({
    type: POP_FOLLOWS_QUEUE
  })
};

export default createReducer({
  followers: {},
  currentFollow: { name: 'Attamusc' },
  queue: [{ name: 'Not Attamusc' }]
}, {
  [FOLLOWERS_FETCHED]: (state, payload) => {
    const queue = state.queue || [];
    const followers = payload.reduce((cache, follow) => {
      const follower = {
        id: follow.user._id,
        logo: follow.user.logo,
        name: follow.user.name,
        createdAt: moment(follow.created_at).fromNow(true)
      };

      if (!cache[follower.id]) {
        queue.push(follower);
      }

      cache[follower.id] = follower;

      return cache;
    }, state.followers || {});

    const stateModification = { followers, queue };
    if (!state.currentFollow) {
      stateModification.currentFollow = queue[0];
    }

    return Object.assign({}, state, stateModification);
  },

  [SEED_FOLLOWERS]: (state, payload) => {
    const followers = payload.reduce((cache, follow) => {
      const follower = {
        logo: follow.user.logo,
        name: follow.user.name,
        createdAt: moment(follow.created_at).fromNow(true)
      };

      cache[follow.user._id] = follower;

      return cache;
    }, state.followers || {});

    return Object.assign({}, state, { followers });
  },

  [POP_FOLLOWS_QUEUE]: (state) => {
    const currentFollow = state.queue[0];
    const queue = state.queue.slice(1);

    return Object.assign({}, state, {
      currentFollow,
      queue
    });
  }
});
