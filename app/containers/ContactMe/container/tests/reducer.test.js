import { fromJS } from 'immutable';
import {
  SUBMIT_MESSAGE_FORM,
  SUBMIT_MESSAGE_FORM_SUCCEEDED,
  SUBMIT_MESSAGE_FORM_FAILED,
  CLOSED_SUCCESS_MESSAGE,
} from '../constants';
import contactMePageReducer from '../reducer';

describe('contactMePageReducer', () => {
  it('returns the initial state', () => {
    expect(contactMePageReducer(undefined, {})).toEqual(
      fromJS({
        messageStatus: 'closed',
      }),
    );
  });

  it('changes SUBMIT_MESSAGE_FORM', () => {
    const resultJSON = contactMePageReducer(undefined, {
      type: SUBMIT_MESSAGE_FORM,
      messageForm: 'test',
    }).toJS();
    const { messageForm } = { ...resultJSON };
    expect(messageForm).toEqual('test');
  });

  it('changes CLOSED_SUCCESS_MESSAGE', () => {
    const resultJSON = contactMePageReducer(undefined, {
      type: CLOSED_SUCCESS_MESSAGE,
    }).toJS();
    const { messageStatus } = { ...resultJSON };
    expect(messageStatus).toEqual('closed');
  });

  it('changes SUBMIT_MESSAGE_FORM_SUCCEEDED', () => {
    const resultJSON = contactMePageReducer(undefined, {
      type: SUBMIT_MESSAGE_FORM_SUCCEEDED,
    }).toJS();
    const { messageStatus } = { ...resultJSON };
    expect(messageStatus).toEqual('succeeded');
  });

  it('changes SUBMIT_MESSAGE_FORM_FAILED', () => {
    const resultJSON = contactMePageReducer(undefined, {
      type: SUBMIT_MESSAGE_FORM_FAILED,
    }).toJS();
    const { messageStatus } = { ...resultJSON };
    expect(messageStatus).toEqual('failed');
  });
});
