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
        speed: 200,
        movesCounter: 0,
        pause: false
      },
      bait: { x: 10, y: 10 }
    }
  };
};

export const WormMotion = () => {
  return {
    type: types.WORM_MOTION,
  };
};

export const MoveWorm = (board, worm) => {
  const boardWidth = board.width;
  const boardHeight = board.height;
  const oldParts = worm.parts;
  let newParts = oldParts.map((p, i) => {
    if (i === oldParts.length - 1) {
      const t = oldParts[oldParts.length - 1];
      let x = (t.x + worm.direction.x) % boardWidth;
      let y = (t.y + worm.direction.y) % boardHeight;
      x += (x < 0) ? boardWidth : 0;
      y += (y < 0) ? boardHeight : 0;
      return { x, y };
    }
    else {
      return oldParts[i + 1];
    }
  });
  if (worm.length > oldParts.length)
    newParts = [oldParts[0], ...newParts];
  const movesCounter = worm.movesCounter + 1;

  return {
    type: types.MOVE_WORM,
    newParts,
    movesCounter
  };
};

export const checkWorm = (board, worm, bait) => {
  const { width, height } = { ...board };
  const wormHead = worm.parts[worm.parts.length - 1];
  if (wormHead.x === bait.x && wormHead.y === bait.y) {
    let length = worm.length + 1;
    let speed = Math.round(worm.speed * 0.9);
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    return {
      type: types.CHECK_WORM,
      worm: { length, speed },
      bait: { x, y },
    };
  }
  else
    return null;
};

export const keyPressed = (key, pause) => {
  let toRet = {
    type: types.KEY_PRESSED,
    pause: pause
  };
  switch (key) {
    case 'escape':
      toRet.pause = !pause;
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
