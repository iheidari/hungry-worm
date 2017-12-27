import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_WORM:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ parts: action.parts, direction: action.direction } } }
      };
    case types.INITIALIZE_BITE:
      return {
        ...state, ...{ bite: { ...state.bite, ...{ point: action.point } } }
      };
    case types.MOVE_WORM:
      const sw = state.worm;
      let oldParts = sw.parts;
      let newParts = oldParts.map((p, i) => {
        if (i === oldParts.length - 1) {
          const t = oldParts[oldParts.length - 1];
          return { x: t.x + sw.direction.x, y: t.y + sw.direction.y };
        }
        else {
          return oldParts[i + 1];
        }
      });

      return {
        ...state, ...{ worm: { ...sw, ...{ parts: newParts } } }
      };
    case types.CHANGE_DIRECTION:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ direction: action.direction } } }
      };
    default:
      return state;
  }
};
