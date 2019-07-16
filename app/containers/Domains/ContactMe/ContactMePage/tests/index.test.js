import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import 'jest-styled-components';
import configureStore from '../../../../../configureStore';
// import { enzymeFind } from 'styled-components/test-utils';

// import { ContactMePage } from '../index';
import { submitMessageForm, closedSuccessMessage } from '../actions';
import { ContactMePage, mapDispatchToProps } from '../index';

describe('<ContactMePage />', () => {
  let store;
  let wrapper;
  let submitMessageFormSpy;
  const renderComponent = _messageStatus =>
    mount(
      <Provider store={store}>
        <ContactMePage
          messageStatus={_messageStatus}
          submitMessageForm={submitMessageFormSpy}
        />
      </Provider>,
    );

  beforeAll(() => {
    submitMessageFormSpy = jest.fn();
    store = configureStore({}, browserHistory);
  });
  describe('<ContactMePage />', () => {
    it('should render its UserMessageBody succeeded', () => {
      wrapper = renderComponent('succeeded');
      expect(wrapper).toBeDefined();
      expect(wrapper.find('Navigation').length).toEqual(1);
      expect(wrapper.find('HeaderBar').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render its UserMessageBody closed', () => {
      wrapper = renderComponent('closed');
      expect(wrapper).toBeDefined();
      expect(wrapper.find('Navigation').length).toEqual(1);
      expect(wrapper.find('HeaderBar').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('mapDispatchToProps', () => {
  describe('submitMessageForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.submitMessageForm).toBeDefined();
    });

    it('should dispatch requestUser when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.submitMessageForm();
      expect(dispatch).toHaveBeenCalledWith(submitMessageForm());
    });
  });

  describe('actionAfterExpire', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.actionAfterExpire).toBeDefined();
    });

    it('should dispatch actionAfterExpire when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.actionAfterExpire('Test');
      expect(dispatch).toHaveBeenCalledWith(closedSuccessMessage('Test'));
    });
  });
});
