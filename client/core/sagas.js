import { all, fork } from 'redux-saga/effects';
import squareSaga from './modules/square/squareSaga';
import roundSaga from './modules/round/roundSaga';
import sessionSaga from './modules/session/sessionSaga';

export default function* rootSaga() {
  yield all([
      fork(squareSaga),
      fork(roundSaga),
      fork(sessionSaga),
  ]);
}
