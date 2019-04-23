// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call } from 'redux-saga/effects';
import { fetchApi } from 'utils/sagaUtiles';
import { REQUEST_USER } from './constants';
import { requestUserSucceeded, requestUserFailed } from './actions';

function* fetchUserStart() {
  yield call(
    fetchApi,
    'localhost:3001/api/v1/users/?uuid=2f67b460-6469-11e9-b132-2b223266dc25',
    requestUserSucceeded,
    requestUserFailed,
  );
}

export default function* fetchUserSaga() {
  yield takeLatest(REQUEST_USER, fetchUserStart);
}
