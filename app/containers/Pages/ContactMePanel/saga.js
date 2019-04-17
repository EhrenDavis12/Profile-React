// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_USER } from './constants';
import { requestUserSucceeded, requestUserFailed } from './actions';

export function fetchUserFromContactMeAPI() {
  return fetch(
    'http://localhost:3001/api/v1/users/?uuid=be7550d0-60b4-11e9-b132-2b223266dc25',
  ).then(response => response.json());
}

function* fetchUser() {
  try {
    const user = yield call(fetchUserFromContactMeAPI);
    yield put(requestUserSucceeded(user));
  } catch (err) {
    yield put(requestUserFailed(err.message));
  }
}

export function* fetchUserSaga() {
  yield takeLatest(REQUEST_USER, fetchUser);
}

/* export function* fetchUserSaga() {
  debugger;
  yield takeLatest(REQUEST_USER, () => {
    console.log('YAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  });
} */

export default fetchUserSaga;
