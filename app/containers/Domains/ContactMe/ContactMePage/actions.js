/*
 *
 * ContactMePage actions
 *
 */

import { SUBMIT_MESSAGE_FORM } from './constants';

export function submitMessageForm(email) {
  return {
    type: SUBMIT_MESSAGE_FORM,
    email,
  };
}
