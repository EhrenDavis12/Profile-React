/*
 *
 * ContactMePage actions
 *
 */

import {
  SUBMIT_MESSAGE_FORM,
  SUBMIT_MESSAGE_FORM_SUCCEEDED,
  SUBMIT_MESSAGE_FORM_FAILED,
} from './constants';

export function submitMessageForm(messageForm) {
  return {
    type: SUBMIT_MESSAGE_FORM,
    messageForm,
  };
}

export function submitMessageFormSucceeded() {
  return {
    type: SUBMIT_MESSAGE_FORM_SUCCEEDED,
  };
}

export function submitMessageFormFailed(message) {
  return {
    type: SUBMIT_MESSAGE_FORM_FAILED,
    message,
  };
}
