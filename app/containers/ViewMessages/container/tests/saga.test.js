/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import viewMessagesPageSaga from '../saga';

import rootSaga, {
  fetchUserStart,
  fetchUserSaga,
  fetchUserMessagesStart,
  fetchUserMessagesSaga,
  selectedUserMessagesStart,
  selectedUserMessagesSaga,
} from '../saga';

describe('viewMessagesPageSaga Saga', () => {
  describe('fetchUser saga group', () => {
    it('should execute the fetchUserSaga', () => {
      const generator = fetchUserSaga();
      const putDescriptor = generator.next(fetchUserStart).value;
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should execute the fetchUserStart', () => {
      const generator = fetchUserStart();
      const putDescriptor = generator.next().value;
      expect(putDescriptor).toMatchSnapshot();
    });
  });

  describe('fetchUserMessages saga group', () => {
    it('should execute the fetchUserMessagesSaga', () => {
      const generator = fetchUserMessagesSaga();
      const putDescriptor = generator.next(fetchUserMessagesStart).value;
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should execute the fetchUserMessagesStart', () => {
      const generator = fetchUserMessagesStart();
      const putDescriptor = generator.next().value;
      expect(putDescriptor).toMatchSnapshot();
    });
  });

  describe('selectedUserMessages saga group', () => {
    it('should execute the selectedUserMessagesSaga', () => {
      const generator = selectedUserMessagesSaga();
      const putDescriptor = generator.next(selectedUserMessagesStart).value;
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should execute the selectedUserMessagesStart', () => {
      const generator = selectedUserMessagesStart({
        selectedUserMessage: { uuid: 'test' },
      });
      const putDescriptor = generator.next(selectedUserMessagesStart).value;
      expect(putDescriptor).toMatchSnapshot();
    });
  });

  describe('rootSaga saga', () => {
    it('should execute the rootSaga', () => {
      const generator = rootSaga();
      const putDescriptor = generator.next().value;
      expect(putDescriptor).toMatchSnapshot();
    });
  });
});
