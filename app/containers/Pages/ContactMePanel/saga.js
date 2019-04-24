// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import { fetchApi } from 'utils/sagaUtiles';
import { REQUEST_USER, REQUEST_USER_MESSAGES } from './constants';
import {
  requestUserSucceeded,
  requestUserFailed,
  requestUserMessagesSucceeded,
  requestUserMessagesFailed,
} from './actions';

function* fetchUserStart() {
  yield call(
    fetchApi,
    'localhost:3001/api/v1/users/?uuid=2f67b460-6469-11e9-b132-2b223266dc25',
    requestUserSucceeded,
    requestUserFailed,
  );
}

function* fetchUserSaga() {
  yield takeLatest(REQUEST_USER, fetchUserStart);
}

function* fetchUserMessagesStart() {
  yield call(
    fetchApi,
    'localhost:3001/api/v1/messagesByUser/?userUuid=2f67b460-6469-11e9-b132-2b223266dc25',
    requestUserMessagesSucceeded,
    requestUserMessagesFailed,
  );
}

function* fetchUserMessagesSaga() {
  yield takeLatest(REQUEST_USER_MESSAGES, fetchUserMessagesStart);
}

// export default { fetchUserSaga, fetchUserMessagesSaga };

export default function* rootSaga() {
  yield all([fetchUserSaga(), fetchUserMessagesSaga()]);
}
