import * as types from '../constants/actionTypes';

export const initWorm = () => {
  //TODO: Random start
  //let direction = Math.random();
  //let startPoint = Math.random();
  return {
    type: types.INITIALIZE_WORM,
    parts: [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }],
    next: { x: 6, y: 3 },
    direction: { x: 1, y: 0 },
  };
};

export const moveWorm = () => {
  //TODO: Random start
  //let direction = Math.random();
  //let startPoint = Math.random();
  return {
    type: types.MOVE_WORM,
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



export const initBite = () => {
  //TODO: Random start
  return {
    type: types.INITIALIZE_BITE,
    point: { x: 10, y: 10 },
  };
};
