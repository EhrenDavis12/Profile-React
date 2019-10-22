// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import {
  fetchApi,
  fetchApiMiddleMan,
  fetchStateWithMethodSave,
} from 'utils/sagaUtiles';
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

import {
  formatUserMessageStart,
  flipMessageDisplay,
} from './messageManipulation';

export function* fetchUserStart() {
  yield call(
    fetchApi,
    `${process.env.CONTACT_ME_API_URL}/api/v1/users/?uuid=${
      process.env.USER_UUID
    }`,
    requestUserSucceeded,
    requestUserFailed,
  );
}

export function* fetchUserSaga() {
  yield takeLatest(REQUEST_USER, fetchUserStart);
}

export function* fetchUserMessagesStart() {
  yield call(
    fetchApiMiddleMan,
    `${process.env.CONTACT_ME_API_URL}/api/v1/messagesByUser/?uuid=${
      process.env.USER_UUID
    }`,
    formatUserMessageStart,
    requestUserMessagesSucceeded,
    requestUserMessagesFailed,
  );
}

export function* fetchUserMessagesSaga() {
  yield takeLatest(REQUEST_USER_MESSAGES, fetchUserMessagesStart);
}

export function* selectedUserMessagesStart(action) {
  yield call(
    fetchStateWithMethodSave,
    makeSelectUserMessages,
    flipMessageDisplay,
    {
      uuid: action.selectedUserMessage.uuid,
    },
    selectUserMessageSucceeded,
    selectUserMessageFailed,
  );
}

export function* selectedUserMessagesSaga() {
  yield takeLatest(SELECT_USER_MESSAGE, selectedUserMessagesStart);
}

export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchUserMessagesSaga(),
    selectedUserMessagesSaga(),
  ]);
}
