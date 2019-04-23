/*
 *
 * ContactMePanel reducer
 *
 */

import { fromJS } from 'immutable';
import { REQUEST_USER_SUCCEEDED } from './constants';

export const initialState = fromJS({
  responseTest: [
    {
      uuid: 'be7550d0-60b4-11e9-b132-2b223266dc25',
      auth0Id: 'ThisIsMyGoogleID',
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
  response: {},
});

function contactMePanelReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_SUCCEEDED:
      return state.set('response', action.user);
    default:
      return state;
  }
}

export default contactMePanelReducer;
