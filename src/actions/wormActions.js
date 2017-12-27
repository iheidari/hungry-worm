import * as types from '../constants/actionTypes';

export const initWorm = () => {
  //TODO: Random start
  //let direction = Math.random();
  //let startPoint = Math.random();
  return {
    type: types.INITIALIZE_WORM,
    parts: [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }],
    next: { x: 6, y: 3 }
  };
};

export const initBite = () => {
  //TODO: Random start
  return {
    type: types.INITIALIZE_BITE,
    point: { x: 10, y: 10 },
  };
};
