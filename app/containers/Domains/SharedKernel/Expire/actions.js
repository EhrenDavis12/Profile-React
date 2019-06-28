/*
 *
 * Expire actions
 *
 */

import {
  CLEAR_TIMER_ACTION,
  SET_TIMER_ACTION,
  SHOW_CHILDREN_ACTION,
  HIDE_CHILDREN_ACTION,
  SET_TIMER_SUCCEEDED,
  CLEAR_TIMER_SUCCEEDED,
} from './constants';

export function setTimerAction(
  delay,
  onHideChildrenAction,
  onClearTimerAction,
) {
  return {
    type: SET_TIMER_ACTION,
    delay,
    onHideChildrenAction,
    onClearTimerAction,
  };
}

export function setTimerSucceeded(timer) {
  return {
    type: SET_TIMER_SUCCEEDED,
    timer,
  };
}

export function clearTimerAction() {
  return {
    type: CLEAR_TIMER_ACTION,
  };
}

export function clearTimerSucceeded() {
  return {
    type: CLEAR_TIMER_SUCCEEDED,
  };
}

export function showChildrenAction() {
  return {
    type: SHOW_CHILDREN_ACTION,
  };
}

export function hideChildrenAction() {
  return {
    type: HIDE_CHILDREN_ACTION,
  };
}
