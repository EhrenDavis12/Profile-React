/*
 *
 * ViewMessagesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_USER_SUCCEEDED,
  REQUEST_USER_MESSAGES_SUCCEEDED,
  SELECT_USER_MESSAGE_SUCCEEDED,
} from './constants';

export const initialState = fromJS({
  responseTest: [
    {
      uuid: 'abcd50d0-60b4-11e9-b132-2b223266dc25',
      auth0Id: 'abcd',
      email: null,
      phone: null,
      createdAt: '2019-04-17T02:01:41.000Z',
      updatedAt: '2019-04-17T02:01:41.000Z',
    },
    {
      uuid: 'be7550d0-60b4-11e9-b132-2b223266dc25',
      auth0Id: 'ThisIsMyGoogleID',
      email: null,
      phone: null,
      createdAt: '2019-04-17T02:01:41.000Z',
      updatedAt: '2019-04-17T02:01:41.000Z',
    },
  ],
  userData: {},
  userMessages: [],
});

function viewMessagesPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_SUCCEEDED:
      return state.set('userData', action.user.data);
    case REQUEST_USER_MESSAGES_SUCCEEDED:
      return state.set('userMessages', action.userMessages.data);
    case SELECT_USER_MESSAGE_SUCCEEDED:
      return state.set('userMessages', action.userMessages);
    default:
      return state;
  }
}

export default viewMessagesPageReducer;
