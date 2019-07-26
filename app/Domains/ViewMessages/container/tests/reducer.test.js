import { fromJS } from 'immutable';
import {
  REQUEST_USER_SUCCEEDED,
  REQUEST_USER_MESSAGES_SUCCEEDED,
  SELECT_USER_MESSAGE_SUCCEEDED,
} from '../constants';
import viewMessagesPageReducer from '../reducer';

describe('viewMessagesPageReducer', () => {
  it('returns the initial state', () => {
    expect(viewMessagesPageReducer(undefined, {})).toEqual(
      fromJS({
        userData: {},
        userMessages: [],
      }),
    );
  });

  it('changes REQUEST_USER_SUCCEEDED', () => {
    const resultJSON = viewMessagesPageReducer(undefined, {
      type: REQUEST_USER_SUCCEEDED,
      user: {
        data: true,
      },
    }).toJS();
    const { userData } = { ...resultJSON };
    expect(userData).toEqual(true);
  });

  it('changes REQUEST_USER_MESSAGES_SUCCEEDED', () => {
    const resultJSON = viewMessagesPageReducer(undefined, {
      type: REQUEST_USER_MESSAGES_SUCCEEDED,
      userMessages: {
        data: true,
      },
    }).toJS();
    const { userMessages } = { ...resultJSON };
    expect(userMessages).toEqual(true);
  });

  it('changes SELECT_USER_MESSAGE_SUCCEEDED', () => {
    const resultJSON = viewMessagesPageReducer(undefined, {
      type: SELECT_USER_MESSAGE_SUCCEEDED,
      userMessages: [1, 2, 3],
    }).toJS();
    const { userMessages } = { ...resultJSON };
    expect(userMessages).toEqual([1, 2, 3]);
  });
});
