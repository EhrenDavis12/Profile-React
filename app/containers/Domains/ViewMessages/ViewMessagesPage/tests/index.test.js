import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import 'jest-styled-components';
import configureStore from '../../../../../configureStore';
// import { enzymeFind } from 'styled-components/test-utils';
import {
  requestUser,
  requestUserMessages,
  selectUserMessage,
} from '../actions';

import { ViewMessagesPage, mapDispatchToProps } from '../index';

describe('<ViewMessagesPage />', () => {
  let store;
  let wrapper;
  let requestUserSpy;
  let requestUserMessagesSpy;
  let selectUserMessageSpy;
  const userData = {
    uuid: '1',
    auth0Id: 'auth0Id1',
  };

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    requestUserSpy = jest.fn();
    requestUserMessagesSpy = jest.fn();
    selectUserMessageSpy = jest.fn();
  });

  const renderComponent = userDataParam =>
    mount(
      <Provider store={store}>
        <ViewMessagesPage
          requestUser={requestUserSpy}
          requestUserMessages={requestUserMessagesSpy}
          userData={userDataParam}
          selectUserMessage={selectUserMessageSpy}
        />
      </Provider>,
    );

  describe('<ViewMessagesPage />', () => {
    it('should render its UserMessageBody', () => {
      wrapper = renderComponent(userData);
      expect(wrapper).toBeDefined();
      expect(requestUserSpy).toHaveBeenCalled();
      expect(requestUserMessagesSpy).toHaveBeenCalled();
    });

    it('should render its UserMessageBody no user data', () => {
      wrapper = renderComponent({});
      expect(wrapper).toBeDefined();
      expect(wrapper.find('UserMessageBody').length).toEqual(0);
      expect(requestUserSpy).toHaveBeenCalled();
      expect(requestUserMessagesSpy).toHaveBeenCalled();
    });
  });

  describe('<ViewMessagesPage /> snap Shots', () => {
    it('renders as expected', () => {
      wrapper = renderComponent(userData);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('mapDispatchToProps', () => {
  describe('requestUser', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.requestUser).toBeDefined();
    });

    it('should dispatch requestUser when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.requestUser();
      expect(dispatch).toHaveBeenCalledWith(requestUser());
    });
  });

  describe('requestUserMessages', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.requestUserMessages).toBeDefined();
    });

    it('should dispatch requestUserMessages when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.requestUserMessages();
      expect(dispatch).toHaveBeenCalledWith(requestUserMessages());
    });
  });

  describe('selectUserMessage', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.selectUserMessage).toBeDefined();
    });

    it('should dispatch selectUserMessage when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.selectUserMessage('userMessage Test');
      expect(dispatch).toHaveBeenCalledWith(
        selectUserMessage('userMessage Test'),
      );
    });
  });
});
