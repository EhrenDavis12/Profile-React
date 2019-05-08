// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all, select, put } from 'redux-saga/effects';
import { fetchApi, fetchApiMiddleMan } from 'utils/sagaUtiles';
import { makeSelectUserMessages } from './selectors';
import {
  REQUEST_USER,
  REQUEST_USER_MESSAGES,
  SELECT_USER_MESSAGE,
} from './constants';
import {
  requestUserSucceeded,
  requestUserFailed,
  requestUserMessagesSucceeded,
  requestUserMessagesFailed,
  selectUserMessageSucceeded,
  selectUserMessageFailed,
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

/* function* fetchUserMessagesStart() {
  yield call(
    fetchApi,
    'localhost:3001/api/v1/messagesByUser/?userUuid=2f67b460-6469-11e9-b132-2b223266dc25',
    requestUserMessagesSucceeded,
    requestUserMessagesFailed,
  );
} */

function* fetchUserMessagesStart() {
  yield call(
    fetchApiMiddleMan,
    'localhost:3001/api/v1/messagesByUser/?userUuid=2f67b460-6469-11e9-b132-2b223266dc25',
    formatUserMessageStart,
    requestUserMessagesSucceeded,
    requestUserMessagesFailed,
  );
}

function* fetchUserMessagesSaga() {
  yield takeLatest(REQUEST_USER_MESSAGES, fetchUserMessagesStart);
}

async function formatUserMessageStart(response) {
  const data = await response.data.map(x => ({
    ...x,
    show: false,
  }));
  response.data = data;
  return response;
}

function* selectedUserMessagesStart(action) {
  try {
    const userMessages = yield select(makeSelectUserMessages());
    const newUserMessages = yield call(
      flipMessageDisplay,
      userMessages,
      action.selectedUserMessage.uuid,
    );
    if (newUserMessages) yield put(selectUserMessageSucceeded(newUserMessages));
  } catch (e) {
    yield put(selectUserMessageFailed(...e.message));
  }
}

async function flipMessageDisplay(dataArray, uuid) {
  const data = await dataArray.map(
    x => (x.uuid === uuid ? { ...x, show: !x.show } : { ...x, show: x.show }),
  );
  return data;
}

function* selectedUserMessagesSaga() {
  yield takeLatest(SELECT_USER_MESSAGE, selectedUserMessagesStart);
}

export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchUserMessagesSaga(),
    selectedUserMessagesSaga(),
  ]);
}
