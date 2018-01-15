import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_APP:
      return {
        ...state, ...{ ...action.store }
      };
    case types.MOVE_WORM:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ parts: action.newParts, movesCounter: action.movesCounter } } }
      };
    case types.KEY_PRESSED:
      return {
        ...state,
        ...{ worm: { ...state.worm, ...{ direction: action.direction || state.worm.direction, pause:action.pause } } }
      };
    case types.CHECK_WORM:
      return {
        ...state,
        ...{ worm: { ...state.worm, ...{ length: action.worm.length, speed: action.worm.speed } } },
        ...{ bait: { ...state.bait, ...{ x: action.bait.x, y: action.bait.y } } },
      }
    default:
      return state;
  }
};
