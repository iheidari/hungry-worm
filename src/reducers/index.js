import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_WORM:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ parts: action.parts, next: action.next } } }
      };
    case types.INITIALIZE_BITE:
      return {
        ...state, ...{ bite: { ...state.bite, ...{ point: action.point } } }
      };
    default:
      return state;
  }
};
