/*
 *
 * ContactMePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_MESSAGE_FORM,
  SUBMIT_MESSAGE_FORM_SUCCEEDED,
  SUBMIT_MESSAGE_FORM_FAILED,
  CLOSED_SUCCESS_MESSAGE,
} from './constants';

export const initialState = fromJS({
  messageStatus: 'closed',
});

function contactMePageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE_FORM:
      return state.set('messageForm', action.messageForm);
    case CLOSED_SUCCESS_MESSAGE:
      return state.set('messageStatus', 'closed');
    case SUBMIT_MESSAGE_FORM_SUCCEEDED:
      return state.set('messageStatus', 'succeeded');
    case SUBMIT_MESSAGE_FORM_FAILED:
      return state.set('messageStatus', 'failed');
    default:
      return state;
  }
}

export default contactMePageReducer;
