// import { take, call, put, select } from 'redux-saga/effects';
// import { takeLatest, all, put } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
// import { SELECT_LINK } from './constants';
import { all } from 'redux-saga/effects';

// export function* pushLinkSaga() {
//   yield takeLatest(SELECT_LINK, pushLinkStart);
// }

// export function* pushLinkStart(action) {
//   yield put(push(action.selectedLink.LinkTo));
// }

// export default function* rootSaga() {
//   yield all([pushLinkSaga()]);
// }

export default function* rootSaga() {
  yield all();
}
