import { takeEvery } from 'redux-saga/effects';
import * as actionsCall from './ActionsCall'
import * as actionTypes from '../constants/actionTypes';

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* sagaControler() {
  yield takeEvery(actionTypes.WORM_MOTION, actionsCall.moveWorm);
}

export default sagaControler;
