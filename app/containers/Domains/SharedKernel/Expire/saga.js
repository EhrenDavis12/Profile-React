import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchStateWithMethodSave } from 'utils/sagaUtiles';
import { makeSelectTimer } from './selectors';
import { setTimer, clearTimer } from './timerManipulation';
import {
  SET_TIMER_ACTION,
  SET_TIMER_SUCCEEDED,
  CLEAR_TIMER_ACTION,
} from './constants';
import {
  setTimerSucceeded,
  showChildrenAction,
  hideChildrenAction,
  clearTimerSucceeded,
} from './actions';

export function* setTimerActionStart(action) {
  yield call(
    fetchStateWithMethodSave,
    makeSelectTimer,
    setTimer,
    action,
    setTimerSucceeded,
    hideChildrenAction,
  );
}

export function* setTimerActionSaga() {
  yield takeLatest(SET_TIMER_ACTION, setTimerActionStart);
}

export function* showChildrenStart() {
  yield put(showChildrenAction());
}

export function* showChildrenSaga() {
  yield takeLatest(SET_TIMER_SUCCEEDED, showChildrenStart);
}

export function* clearTimerActionStart() {
  yield call(
    fetchStateWithMethodSave,
    makeSelectTimer,
    clearTimer,
    null,
    clearTimerSucceeded,
    hideChildrenAction,
  );
}

export function* clearTimerActionSaga() {
  yield takeLatest(CLEAR_TIMER_ACTION, clearTimerActionStart);
}

export default function* rootSaga() {
  yield all([setTimerActionSaga(), showChildrenSaga(), clearTimerActionSaga()]);
}
