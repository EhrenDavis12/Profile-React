import {
  SUBMIT_MESSAGE_FORM,
  SUBMIT_MESSAGE_FORM_SUCCEEDED,
  SUBMIT_MESSAGE_FORM_FAILED,
  CLOSED_SUCCESS_MESSAGE,
} from '../constants';

import {
  submitMessageForm,
  submitMessageFormSucceeded,
  submitMessageFormFailed,
  closedSuccessMessage,
} from '../actions';

describe('ContactMePage actions', () => {
  describe('submitMessageForm Action', () => {
    it('has a type of SUBMIT_MESSAGE_FORM', () => {
      const expected = {
        type: SUBMIT_MESSAGE_FORM,
        messageForm: 'test',
      };
      expect(submitMessageForm('test')).toEqual(expected);
    });
  });

  describe('submitMessageFormSucceeded Action', () => {
    it('has a type of SUBMIT_MESSAGE_FORM_SUCCEEDED', () => {
      const expected = {
        type: SUBMIT_MESSAGE_FORM_SUCCEEDED,
      };
      expect(submitMessageFormSucceeded()).toEqual(expected);
    });
  });

  describe('submitMessageFormFailed Action', () => {
    it('has a type of SUBMIT_MESSAGE_FORM_FAILED', () => {
      const expected = {
        type: SUBMIT_MESSAGE_FORM_FAILED,
        message: 'test',
      };
      expect(submitMessageFormFailed('test')).toEqual(expected);
    });
  });

  describe('closedSuccessMessageclosedSuccessMessage Action', () => {
    it('has a type of CLOSED_SUCCESS_MESSAGE', () => {
      const expected = {
        type: CLOSED_SUCCESS_MESSAGE,
      };
      expect(closedSuccessMessage()).toEqual(expected);
    });
  });
});
