/*
 *
 * ViewMessagesPage actions
 *
 */

import {
  REQUEST_USER,
  REQUEST_USER_SUCCEEDED,
  REQUEST_USER_FAILED,
  REQUEST_USER_MESSAGES,
  REQUEST_USER_MESSAGES_SUCCEEDED,
  REQUEST_USER_MESSAGES_FAILED,
  SELECT_USER_MESSAGE,
  SELECT_USER_MESSAGE_SUCCEEDED,
  SELECT_USER_MESSAGE_FAILED,
} from './constants';

export function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

export function requestUserSucceeded(user) {
  return {
    type: REQUEST_USER_SUCCEEDED,
    user,
  };
}

export function requestUserFailed(message) {
  return {
    type: REQUEST_USER_FAILED,
    message,
  };
}

export function requestUserMessages() {
  return {
    type: REQUEST_USER_MESSAGES,
  };
}

export function requestUserMessagesSucceeded(userMessages) {
  return {
    type: REQUEST_USER_MESSAGES_SUCCEEDED,
    userMessages,
  };
}

export function requestUserMessagesFailed(message) {
  return {
    type: REQUEST_USER_MESSAGES_FAILED,
    message,
  };
}

export function selectUserMessage(selectedUserMessage) {
  return {
    type: SELECT_USER_MESSAGE,
    selectedUserMessage,
  };
}

export function selectUserMessageSucceeded(userMessages) {
  return {
    type: SELECT_USER_MESSAGE_SUCCEEDED,
    userMessages,
  };
}

export function selectUserMessageFailed(message) {
  return {
    type: SELECT_USER_MESSAGE_FAILED,
    message,
  };
}
