import * as types from '../constants/actionTypes';
import head from '../img/head.png';
import tail from '../img/tail.png';
import body from '../img/body.png';

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
        speed: 200,
        moves: 0,
        pause: false,
        type: {
          head: { backgroundImage: `url(${head})`, backgroundSize: 'contain' },
          tail: { backgroundImage: `url(${tail})`, backgroundSize: 'contain' },
          body: { backgroundImage: `url(${body})`, backgroundSize: 'contain' }
        }
      },
      bait: {
        x: 10, y: 10,
        type: { backgroundColor: 'blue' }
      }
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

export const keyPressed = (key) => {
  let toRet = {
    type: types.KEY_PRESSED,
  };
  switch (key) {
    case 'escape':
      toRet.pause = true;
      break;
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
