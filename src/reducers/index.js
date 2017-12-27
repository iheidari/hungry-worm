import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_WORM:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ parts: action.parts, next: action.next, direction: action.direction } } }
      };
    case types.INITIALIZE_BITE:
      return {
        ...state, ...{ bite: { ...state.bite, ...{ point: action.point } } }
      };
    case types.MOVE_WORM:
      const sw = state.worm;
      let oldParts = sw.parts;
      let oldNext = sw.next;
      let newParts = oldParts.map((p, i) => {
        if (i === oldParts.length - 1) {
          return oldNext;
        }
        else {
          return oldParts[i + 1];
        }
      });
      let newNext = { x: oldNext.x + sw.direction.x, y: oldNext.y + sw.direction.y }

      return {
        ...state, ...{ worm: { ...sw, ...{ parts: newParts, next: newNext } } }
      };
    case types.CHANGE_DIRECTION:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ direction: action.direction } } }
      };
    default:
      return state;
  }
};
