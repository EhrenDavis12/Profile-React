/* import { defaultAction } from '../actions';
import { DEFAULT_ACTION } from '../constants';
describe('ViewMessagesPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
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
} from '../constants';
import {
  requestUser,
  requestUserSucceeded,
  requestUserFailed,
  requestUserMessages,
  requestUserMessagesSucceeded,
  requestUserMessagesFailed,
  selectUserMessage,
  selectUserMessageSucceeded,
  selectUserMessageFailed,
} from '../actions';

describe('VewMessagesPage actions', () => {
  describe('requestUser action group', () => {
    it('action requestUser', () => {
      const expected = {
        type: REQUEST_USER,
      };
      expect(requestUser()).toEqual(expected);
    });
    it('action requestUserSucceeded', () => {
      const expected = {
        type: REQUEST_USER_SUCCEEDED,
        user: 'User Data',
      };
      expect(requestUserSucceeded('User Data')).toEqual(expected);
    });
    it('action requestUserFailed', () => {
      const expected = {
        type: REQUEST_USER_FAILED,
        message: 'Failed Message',
      };
      expect(requestUserFailed('Failed Message')).toEqual(expected);
    });
  });

  describe('requestUserMessages action group', () => {
    it('action requestUserMessages', () => {
      const expected = {
        type: REQUEST_USER_MESSAGES,
      };
      expect(requestUserMessages()).toEqual(expected);
    });
    it('action requestUserMessagesSucceeded', () => {
      const expected = {
        type: REQUEST_USER_MESSAGES_SUCCEEDED,
        userMessages: 'User Messages',
      };
      expect(requestUserMessagesSucceeded('User Messages')).toEqual(expected);
    });
    it('action requestUserMessagesFailed', () => {
      const expected = {
        type: REQUEST_USER_MESSAGES_FAILED,
        message: 'Failed Message',
      };
      expect(requestUserMessagesFailed('Failed Message')).toEqual(expected);
    });
  });

  describe('selectUserMessage action group', () => {
    it('action selectUserMessage', () => {
      const expected = {
        type: SELECT_USER_MESSAGE,
      };
      expect(selectUserMessage()).toEqual(expected);
    });
    it('action selectUserMessageSucceeded', () => {
      const expected = {
        type: SELECT_USER_MESSAGE_SUCCEEDED,
        userMessages: 'User Messages',
      };
      expect(selectUserMessageSucceeded('User Messages')).toEqual(expected);
    });
    it('action selectUserMessageFailed', () => {
      const expected = {
        type: SELECT_USER_MESSAGE_FAILED,
        message: 'Failed Message',
      };
      expect(selectUserMessageFailed('Failed Message')).toEqual(expected);
    });
  });
});
