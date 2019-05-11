// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, all } from 'redux-saga/effects';
import { postStateApi } from 'utils/sagaUtiles';
import { makeSelectMessageForm } from './selectors';
import { SUBMIT_MESSAGE_FORM } from './constants';
import { submitMessageFormSucceeded, submitMessageFormFailed } from './actions';

function* submitMessageFormStart() {
  yield call(
    postStateApi,
    'localhost:3001/api/v1/messages',
    makeSelectMessageForm,
    submitMessageFormSucceeded,
    submitMessageFormFailed,
  );
}

function* submitMessageFormSaga() {
  yield takeLatest(SUBMIT_MESSAGE_FORM, submitMessageFormStart);
}

export default function* rootSaga() {
  yield all([submitMessageFormSaga()]);
}
