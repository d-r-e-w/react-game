import { takeLatest, all, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { constants } from '../../../core/constants';
import { activateSquare, deactivateSquare } from '../square/squareActions';
import { setPattern, startReproduction } from '../session/sessionActions';
import { deleteScore } from '../round/roundActions';

function*  makePattern() {
    const state = yield select();
    const round = state.round.get('name');
    const blinkCount = 3 + round;

    let pattern = [];

    for (let index = 1; index < blinkCount+1; index++) {

        let rand = Math.floor(Math.random() * 4);
        yield pattern.push(rand);

        yield put(activateSquare(rand));
        yield delay(500);
        yield put(deactivateSquare(rand));
        yield delay(500);
    }

    yield put(setPattern(pattern));
    yield put(startReproduction());

}

export default function* SquareSaga() {
  yield all([
      takeLatest(constants.square.MAKE_PATTERN, makePattern)
  ]);
}
