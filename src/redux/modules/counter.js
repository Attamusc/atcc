import createReducer from 'utils/createReducer';

const COUNTER_INCREMENT = Symbol('COUNTER_INCREMENT');

export const actions = {
  increment: () => ({ type: COUNTER_INCREMENT })
};

export default createReducer(0, {
  [COUNTER_INCREMENT]: (state) => state + 1
});
