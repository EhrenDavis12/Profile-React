/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, put, all } from 'redux-saga/effects';

import { push } from 'react-router-redux';
import { SELECT_LINK } from '../constants';
import rootSaga, { pushLinkSaga, pushLinkStart } from '../saga';

const action = { selectedLink: { LinkTo: 'testSagasLink' } };

describe('navigationSaga Saga', () => {
  /* it('should execute the pushLinkSaga', () => {
    const generator = pushLinkSaga();
    const putDescriptor = generator.next(pushLinkStart).value;
    expect(putDescriptor).toEqual(takeLatest(SELECT_LINK, pushLinkStart));
    expect(putDescriptor).toMatchSnapshot();
  });

  it('should execute the pushLinkStart', () => {
    const generator = pushLinkStart(action);
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toEqual(put(push(action.selectedLink.LinkTo)));
    expect(putDescriptor).toMatchSnapshot();
  });

  it('should execute the rootSaga', () => {
    const generator = rootSaga();
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toEqual(all([pushLinkSaga()]));
    expect(putDescriptor).toMatchSnapshot();
  }); */

  it('should execute the blank rootSaga', () => {
    const generator = rootSaga();
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toEqual(all());
    expect(putDescriptor).toMatchSnapshot();
  });
});
