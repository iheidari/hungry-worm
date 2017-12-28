import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_APP:
      return {
        ...state, ...{ ...action.store }
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
      if (sw.length > oldParts.length)
        newParts = [oldParts[0], ...newParts];
      return {
        ...state, ...{ worm: { ...sw, ...{ parts: newParts } } }
      };
    case types.CHANGE_DIRECTION:
      return {
        ...state, ...{ worm: { ...state.worm, ...{ direction: action.direction } } }
      };
    case types.CHECK_EATING:
      const worm = state.worm;
      const bait = state.bait;
      const { width, height } = { ...state.board };
      const wormHead = worm.parts[worm.parts.length - 1];
      if (wormHead.x === bait.x && wormHead.y === bait.y) {
        let length = worm.length + 1;
        let speed = Math.round(worm.speed * 0.9);
        const x = Math.round(Math.random() * width);
        const y = Math.round(Math.random() * height);

        return {
          ...state,
          ...{ worm: { ...state.worm, ...{ length, speed } } },
          ...{ bait: { ...state.bait, ...{ x, y } } },
        }
      }
      else
        return state;
    default:
      return state;
  }
};
