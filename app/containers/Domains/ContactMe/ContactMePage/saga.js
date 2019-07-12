// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import { postStateApi } from 'utils/sagaUtiles';
import { makeSelectMessageForm } from './selectors';
import { SUBMIT_MESSAGE_FORM } from './constants';
import { submitMessageFormSucceeded, submitMessageFormFailed } from './actions';

export function* submitMessageFormStart() {
  yield call(
    postStateApi,
    `${process.env.REACT_APP_CONTACT_ME_API_URL}${
      process.env.CONTACT_ME_API_MESSAGES
    }`,
    makeSelectMessageForm,
    submitMessageFormSucceeded,
    submitMessageFormFailed,
  );
}

export function* submitMessageFormSaga() {
  yield takeLatest(SUBMIT_MESSAGE_FORM, submitMessageFormStart);
}

export default function* rootSaga() {
  yield all([submitMessageFormSaga()]);
}
