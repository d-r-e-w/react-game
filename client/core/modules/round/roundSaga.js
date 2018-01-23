import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { setWon, endSession } from '../session/sessionActions';

export function* onEnded() {
    const state = yield select();
    const clickedSquares = state.session.get('clicked_squares');
    const pattern = state.session.get('pattern');


    if (JSON.stringify(pattern) === JSON.stringify(clickedSquares)) {
        yield put(setWon(true));
    } else {
        yield put(setWon(false));
    }

    yield put(endSession());
}

export default function* roundSaga() {
  yield all([
    takeLatest(constants.round.ENDED, onEnded),
  ]);
}
