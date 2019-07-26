import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// import { enzymeFind } from 'styled-components/test-utils';
import { browserHistory } from 'react-router-dom';
import configureStore from 'containers/../configureStore';
import { toggleDrawer, selectLink } from '../actions';

import Navigation, { mapDispatchToProps } from '../index';

describe('<Navigation />', () => {
  let store;
  let wrapper;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    wrapper = renderComponentMount();
  });

  const renderComponentMount = () =>
    mount(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );

  describe('<Navigation /> snap Shots', () => {
    it('renders as expected with populated messages', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Navigation />', () => {
    it('should render its NavigationBody', () => {
      expect(wrapper.find('NavigationBody').length).toEqual(1);
    });
  });

  describe('mapDispatchToProps', () => {
    describe('toggleDrawer', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.toggleDrawer).toBeDefined();
      });

      it('should dispatch toggleDrawer when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.toggleDrawer();
        expect(dispatch).toHaveBeenCalledWith(toggleDrawer());
      });
    });

    describe('selectLink', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectItem).toBeDefined();
      });

      it('should dispatch selectLink when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const link = 'mxstbr';
        result.selectItem(link);
        expect(dispatch).toHaveBeenCalledWith(selectLink(link));
      });
    });
  });
});
