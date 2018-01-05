import { select, put } from 'redux-saga/effects';
import * as wormActions from '../actions/wormActions';

const getWorm = (state) => state.worm
const getBoard = (state) => state.board
const getBait = (state) => state.bait

function* moveWorm(action) {
  const worm = yield select(getWorm);
  const board = yield select(getBoard);
  const bait = yield select(getBait);
  yield put(wormActions.MoveWorm(board, worm));
  const checkWorm = wormActions.checkWorm(board, worm, bait);
  if (checkWorm)
    yield put(checkWorm);
}

export { moveWorm };
