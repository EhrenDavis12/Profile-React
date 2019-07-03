import React from 'react';
import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router-dom';
// import configureStore from '../../../../../configureStore';

import Expire from '../index';

describe('Expire setup', () => {
  // let store;
  let wrapper;
  let actionAfterExpireSpy;
  const childrenOrg = <h1>foo</h1>;
  const childrenReplaced = <h1>boo</h1>;

  const renderComponent = (children, func) =>
    mount(
      // <Provider store={store}>
      <Expire delay={1000} actionAfterExpire={func}>
        {children}
      </Expire>,
      // </Provider>,
    );

  beforeAll(() => {
    // store = configureStore({}, browserHistory);
    actionAfterExpireSpy = jest.fn();
    jest.useFakeTimers();
  });

  describe('setting timers', () => {
    it('should set mock timers', () => {
      wrapper = renderComponent(childrenOrg, null);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
  });

  describe('<Expire /> expired', () => {
    it('should time out and hide children', () => {
      wrapper = renderComponent(childrenOrg, null);
      expect(wrapper).toBeDefined();
      expect(wrapper.contains(childrenOrg)).toEqual(true);
      expect(wrapper.find('Expire').state('visible')).toEqual(true);

      jest.runAllTimers();

      expect(wrapper).toBeDefined();
      expect(wrapper.find('Expire').state('visible')).toEqual(false);
    });

    it('should call spy function once timer is up', () => {
      wrapper = renderComponent(childrenOrg, actionAfterExpireSpy);
      expect(wrapper).toBeDefined();
      expect(actionAfterExpireSpy).not.toHaveBeenCalled();

      jest.runAllTimers();

      expect(wrapper).toBeDefined();
      expect(actionAfterExpireSpy).toHaveBeenCalled();
    });
  });

  describe('<Expire /> replace the children', () => {
    it('should render with New children', () => {
      wrapper = renderComponent(childrenOrg, null);
      expect(wrapper).toBeDefined();
      expect(wrapper.children().length).toEqual(1);
      expect(wrapper.contains(childrenOrg)).toEqual(true);
      wrapper.setProps({
        children: childrenReplaced,
      });
      expect(wrapper.contains(childrenReplaced)).toEqual(true);
    });

    it('should get same children and do nothing', () => {
      wrapper = renderComponent(childrenOrg, null);
      expect(wrapper).toBeDefined();
      expect(wrapper.children().length).toEqual(1);
      expect(wrapper.contains(childrenOrg)).toEqual(true);
      wrapper.setProps({
        children: childrenOrg,
      });
      expect(wrapper.contains(childrenOrg)).toEqual(true);
    });
  });

  describe('<Expire /> unMount', () => {
    it('should unMount Expire', () => {
      wrapper = renderComponent(childrenOrg, null);
      expect(wrapper).toBeDefined();
      expect(wrapper.contains(childrenOrg)).toEqual(true);
      wrapper.unmount();
      expect(wrapper.contains(childrenOrg)).toEqual(false);
    });
  });
});
