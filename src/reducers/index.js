import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_APP:
      return {
        ...state, ...{ ...action.store }
      };
    case types.MOVE_WORM:
      const boardWidth = state.board.width;
      const boardHeight = state.board.height;
      const sw = state.worm;
      const oldParts = sw.parts;
      let newParts = oldParts.map((p, i) => {
        if (i === oldParts.length - 1) {
          const t = oldParts[oldParts.length - 1];
          let x = (t.x + sw.direction.x) % boardWidth;
          let y = (t.y + sw.direction.y) % boardHeight;
          x += (x < 0) ? boardWidth : 0;
          y += (y < 0) ? boardHeight : 0;
          return { x, y };
        }
        else {
          return oldParts[i + 1];
        }
      });
      if (sw.length > oldParts.length)
        newParts = [oldParts[0], ...newParts];
      const moves = sw.moves + 1;
      return {
        ...state, ...{ worm: { ...sw, ...{ parts: newParts, moves } } }
      };
    case types.KEY_PRESSED:
      const pause = state.worm.pause ^ action.pause;
      return {
        ...state, ...{ worm: { ...state.worm, ...{ direction: action.direction || state.worm.direction, pause } } }
      };
    case types.CHECK_EATING:
      const worm = state.worm;
      const bait = state.bait;
      const { width, height } = { ...state.board };
      const wormHead = worm.parts[worm.parts.length - 1];
      if (wormHead.x === bait.x && wormHead.y === bait.y) {
        let length = worm.length + 1;
        let speed = Math.round(worm.speed * 0.9);
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
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
