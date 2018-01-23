import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { resetSquares, makeSquaresPattern } from '../square/squareActions';
import { deleteRound, endedRound, startedRound } from '../round/roundActions';
import { endReproduction } from '../session/sessionActions';

export function* restart() {
  yield put(resetSquares());
  yield put(deleteRound());
}

export function* start() {
    yield put(startedRound());
    yield put(makeSquaresPattern());
}

export function* clickSquare(payload) {
    const state = yield select();
    const round = state.round.get('name');
    const blinkCount = 3 + round;

    yield payload.payload.clickedSquares.push(payload.payload.id);

    if (payload.payload.clickedSquares.length == blinkCount) {
        yield put(endReproduction());
        yield put(endedRound());
    }
}

export default function* sessionSaga() {
  yield all([
    takeLatest(constants.session.RESTART, restart),
    takeLatest(constants.session.START, start),
    takeLatest(constants.session.CLICK, clickSquare),
  ]);
}
