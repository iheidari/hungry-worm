import * as types from '../constants/actionTypes';

export const initApp = () => {
  return {
    type: types.INITIALIZE_APP,
    store: {
      board: {
        width: 50,
        height: 50,
        cellSize: 10
      },
      worm: {
        parts: [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }],
        direction: { x: 1, y: 0 },
        length: 3,
        speed: 700,
        moves:0
      },
      bait: { x: 10, y: 10 }
    }
  };
}

export const moveWorm = () => {
  return {
    type: types.MOVE_WORM,
  };
};

export const checkEating = () => {
  return {
    type: types.CHECK_EATING,
  };
};

export const changeDirection = (dir) => {
  let toRet = {
    type: types.CHANGE_DIRECTION,
    //direction:{x:,y:}
  };
  switch (dir) {
    case 'up':
      toRet.direction = { x: 0, y: -1 };
      break;
    case 'down':
      toRet.direction = { x: 0, y: 1 };
      break;
    case 'left':
      toRet.direction = { x: -1, y: 0 };
      break;
    case 'right':
      toRet.direction = { x: 1, y: 0 };
      break;
    default:
      break;
  }
  return toRet;
};
