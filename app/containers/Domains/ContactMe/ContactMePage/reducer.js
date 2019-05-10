/*
 *
 * ContactMePage reducer
 *
 */

import { fromJS } from 'immutable';
import { SUBMIT_MESSAGE_FORM } from './constants';

export const initialState = fromJS({});

function contactMePageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE_FORM:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default contactMePageReducer;
