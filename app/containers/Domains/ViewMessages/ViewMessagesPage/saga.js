// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import { fetchApi, fetchApiMiddleMan } from 'utils/sagaUtiles';
import {
  REQUEST_USER,
  REQUEST_USER_MESSAGES,
  // SELECT_USER_MESSAGE,
  // REQUEST_USER_MESSAGES_SUCCEEDED,
} from './constants';
import {
  requestUserSucceeded,
  requestUserFailed,
  requestUserMessagesSucceeded,
  requestUserMessagesFailed,
  // selectUserMessageSucceeded,
  // selectUserMessageFailed,
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

/* 
function* selectedUserMessagesStart(selectedUserMessage) {
  try {
    const newUserMessages = yield select('userMessages').map(
      x =>
        selectedUserMessage && x.uuid === selectedUserMessage.uuid
          ? { ...x, show: !x.show }
          : { ...x, show: x.show },
    );
    if (newUserMessages) yield put(selectUserMessageSucceeded(newUserMessages));
  } catch (e) {
    yield put(selectUserMessageFailed(...e.message));
  }
}

function* selectedUserMessagesSaga() {
  yield takeLatest(SELECT_USER_MESSAGE, selectedUserMessagesStart);
} */

// export default { fetchUserSaga, fetchUserMessagesSaga };

export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchUserMessagesSaga(),
    // selectedUserMessagesSaga(),
  ]);
}
