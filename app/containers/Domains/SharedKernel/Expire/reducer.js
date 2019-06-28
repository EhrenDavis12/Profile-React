/*
 *
 * Expire reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_TIMER_SUCCEEDED,
  SHOW_CHILDREN_ACTION,
  HIDE_CHILDREN_ACTION,
  SET_TIMER_SUCCEEDED,
} from './constants';

export const initialState = fromJS({
  visible: false,
  timer: null,
});

function expireReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIMER_SUCCEEDED:
      return state.set('timer', action.timer);
    case CLEAR_TIMER_SUCCEEDED:
      return state.set('timer', null);
    case SHOW_CHILDREN_ACTION:
      return state.set('visible', true);
    case HIDE_CHILDREN_ACTION:
      return state.set('visible', false);
    default:
      return state;
  }
}

export default expireReducer;
